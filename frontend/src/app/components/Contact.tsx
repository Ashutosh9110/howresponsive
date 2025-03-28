"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { About, SocialHandle } from "../utils/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SectionHeading, TextReveal } from "../components/ui/Typography";
import { SlideIn, Transition } from "../components/ui/Transitions";
import { Input, Textarea } from "./ui/Input";

interface ContactProps {
  email: string;
  social_handle: SocialHandle[];
  about: About;
}
const Contact = ({ email, social_handle, about }: ContactProps) => {
  const [status, setStatus] = useState<"SENDING" | "DONE" | "ERROR" | "IDLE">(
    "IDLE"
  );
  const [statusText, setStatusText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    try {
      console.log("Form data:", formData);
      setTimeout(() => {
        setStatus("DONE");
        setFormData({
          email: "",
          message: "",
          name: "",
          subject: "",
        });
        setStatusText("Message sent successfully!");
      }, 3000);
    } catch (error: unknown) {
      setStatus("ERROR");
      setStatusText("Error in sending message: " + (error as Error).message);
      console.error("Error sending message:", (error as Error).message);
    }
  };

  useEffect(() => {
    if (status === "DONE" || status === "ERROR") {
      const timer = setTimeout(() => {
        setStatus("IDLE");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <motion.section className="relative" id="contact">
      <AnimatePresence initial={false}>
        {status !== "IDLE" && (
          <motion.li
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={cn(
              "fixed top-4 right-4 p-2 px-4 w-[300px] z-50 h-16 rounded-xl bg-teal-400 text-black flex items-center",
              status === "ERROR"
                ? "bg-red-500"
                : status === "DONE"
                ? "bg-teal-400"
                : ""
            )}
          >
            <p className="text-black font-semibold">{statusText}</p>
          </motion.li>
        )}
      </AnimatePresence>
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px] -z-10" />
      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading className="flex flex-col items-center justify-center">
          <SlideIn className="text-white">Interested in talking,</SlideIn>{" "}
          <br /> 
        </SectionHeading>
        
        <div className="flex flex-col items-center justify-center md:pt-16">
          <form className="space-y-4 w-[50%]" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <Transition className="w-full">
                <Input
                  id="name"
                  name="name"
                  placeholder="Full name"
                  className="border-0 border-b rounded-none text-white"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Transition>
              <Transition className="w-full">
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="border-0 border-b rounded-none text-white"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Transition>
            </div>
            <div className="space-y-2">
              <Transition>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  className="border-0 border-b rounded-none text-white"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Transition>
            </div>
            <div className="space-y-2 text-white">
              <Transition>
                <Textarea
                  className="min-h-[100px] rounded-none border-0 border-b resize-none text-white"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Transition>
            </div>
            <div>
              <Transition>
                <motion.button
                  whileHover="whileHover"
                  initial="initial"
                  className="border border-white px-8 py-2 rounded-3xl relative overflow-hidden text-white"
                  type="submit"
                >
                  <TextReveal className="uppercase cursor-pointer">
                    {status === "SENDING" ? "Sending..." : "Send Message"}
                  </TextReveal>
                </motion.button>
              </Transition>
            </div>
          </form>
        </div>
      </div>
      <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm text-white">
        <Transition>
          <div>&copy; {new Date().getFullYear()} </div>
        </Transition>
        <Transition>
          <p>
           
            <Link
              href={"https://twitter.com/tehseen_type"}
              className="hover:underline"
            >
              
            </Link>
          </p>
        </Transition>
      </footer>
    </motion.section>
  );
};

export default Contact;
