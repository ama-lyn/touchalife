import React from "react";
import Title from './ui/Title'
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="relative bg-background pt-[64px]">
      <div className="absolute top-1/4 left-0 transform -translate-x-2/3 -translate-y-2/3 text-hero_svg">
        <svg width="100" height="100" className="text-hero_svg">
          <circle cx="50" cy="50" r="50" fill="currentColor" />
        </svg>
      </div>

      <div className="section">
        <div className="flex flex-row-reverse flex-wrap-reverse  md:flex-row justify-between items-center">
          <div className="w-96 flex flex-col items-start gap-2 md:gap-5">
            <Title
              text="Offering aid to the less fortunate"
              color="text-title"
              fontSize="text-h1-48-light"
            />
            <p className="text-h8-regular text-title opacity-50">
              It is about giving back to the community, and making the world a
              better place
            </p>
            <Button text="MAKE A DONATION" />
          </div>
          <div className="w-[375px] md:w-1/2">
            <img src="/images/hero.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
