import Contact from "@/app/components/Contact";

export default function ContactPage() {
  // Add dummy props for development
  const dummyProps = {
    email: "contact@example.com",
    social_handle: [
      {
        _id: "1",
        platform: "Twitter",
        url: "https://twitter.com/example",
        enabled: true
      },
      {
        _id: "2",
        platform: "LinkedIn",
        url: "https://linkedin.com/in/example",
        enabled: true
      }
    ],
    about: {
      phoneNumber: "+1 123 456 7890",
      address: "123 Example Street, City, Country"
    }
  };

  return <Contact {...dummyProps} />;
}