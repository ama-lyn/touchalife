import React from "react";
import Title from "./ui/Title";
import Button from "./ui/Button";

const Mission = () => {
  return (
    <section className="bg-sky section overflow-hidden">
      <div className="relative flex flex-row flex-wrap justify-center md:justify-between mt-6 mb-4">
        <div className="absolute transform translate-x-[-90%] translate-y-[40%] md:translate-y-[-20%] md:translate-x-[80%]">
            <img src="/images/combinedshape.png" alt="combinedshape" className="w-[250px]"/>
        </div>
        <Title text="Join our mission" color="text-white" />
        <div className="flex flex-row flex-wrap items-center justify-center md:gap-2 gap-4 pt-5">
        <Button text='BECOME A VOLUNTEER ❤️' buttoncolor="bg-white " color="text-button"/>
        <Button text='DONATE NOW ❤️' buttoncolor="bg-white" color="text-button"/>
        </div>
        

      </div>
    </section>
  );
};

export default Mission;
