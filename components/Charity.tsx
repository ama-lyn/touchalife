import React from "react";
import Title from "./ui/Title";
import Button from "./ui/Button";

const Charity = () => {
  return (
    <section className="bg-background section">
      <div className="flex flex-row flex-wrap-reverse items-center justify-center gap-20 py-16">
        <div className="flex flex-col items-start w-[400px]">
          <Title text="Vision" color="text-sky" fontSize="text-h4-regular" />
          <Title
            text="A thriving community"
            color="text-title"
            fontSize="text-h1-48-regular"
          />
          <p className="text-title opacity-60 pt-6 pb-10 text-h6-regular">
          A thriving community where every individual has access to opportunities for growth, equitable resources, and a voice in shaping their future.
          </p>
          <Button
            text="MAKE A DONATION"
            color="text-button"
            buttoncolor="bg-background"
          />
        </div>

        <img src="/images/child.png" alt="About" className="md:w-1/2  " />
      </div>
    </section>
  );
};

export default Charity;
