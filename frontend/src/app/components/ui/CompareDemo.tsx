import React from "react";
import { Compare } from "../../components/ui/Compare";
import moksha from "../../../../public/assets/moksha.png"
import ashu from "../../../../public/assets/8.jpeg"

export function CompareDemo() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4 relative"
        >
          <a
          href="https://work-with-ashutosh.netlify.app/"
          className="absolute top-8 left-8 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-base font-semibold shadow-lg cursor-pointer">
            Moksha
          </a>
          <div className="absolute top-8 right-8 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-base font-semibold shadow-lg cursor-pointer">
            Ashutosh
          </div>
          <Compare
            firstImage={ashu.src}
            secondImage={moksha.src}
            firstImageClassName="object-contain object-center w-full h-full"
            secondImageClassname="object-contain object-center w-full h-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
            firstImageLabel="Moksha"
            secondImageLabel="Ashutosh"
          />
        </div>
      </div>
    </div>
  );
}


