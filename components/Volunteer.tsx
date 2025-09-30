import React from "react";
import Title from "./ui/Title";
import Button from "./ui/Button";

const Volunteer = () => {
  return (
    <section className="bg-background section">
      <div className="flex flex-col pb-14">
        <Title text="VOLUNTEERS" color="text-sky" fontSize="text-h7-regular" />
        <Title
          text="Our Volunteers"
          color="text-title"
          fontSize="text-h2-regular"
        />
      </div>
      {/* VOLUNTEERS */}
      <div className="flex flex-row flex-wrap gap-8 justify-center">
      <div className=" w-[250px] ">
        <img src="/images/Bitmap.png" alt="A volunteer" />
        <div className="p-4 bg-white rounded-b-xl ">
          <div className="relative block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-black after:to-gray-400 pb-4">
            <Title text="Benito Noboa" fontSize="text-h4-regular" responsiveFontSize="text-h6-regular" />
          </div>
          <p className="pt-4">Volunteer</p>
        </div>
      </div>

      <div className=" w-[250px] ">
        <img src="/images/Bitmap.png" alt="A volunteer" />
        <div className="p-4 bg-white rounded-b-xl ">
          <div className="relative block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-black after:to-gray-400 pb-4">
            <Title text="Benito Noboa" fontSize="text-h4-regular" responsiveFontSize="text-h6-regular" />
          </div>
          <p className="pt-4">Volunteer</p>
        </div>
      </div>

      <div className=" w-[250px]">
        <img src="/images/Bitmap.png" alt="A volunteer" />
        <div className="p-4 bg-white rounded-b-xl ">
          <div className="relative block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-black after:to-gray-400 pb-4">
            <Title text="Benito Noboa" fontSize="text-h4-regular" responsiveFontSize="text-h6-regular" />
          </div>
          <p className="pt-4">Volunteer</p>
        </div>
      </div>

      <div className=" w-[250px] ">
        <img src="/images/Bitmap.png" alt="A volunteer" />
        <div className="p-4 bg-white rounded-b-xl ">
          <div className="relative block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-black after:to-gray-400 pb-4">
            <Title text="Benito Noboa" fontSize="text-h4-regular" responsiveFontSize="text-h6-regular" />
          </div>
          <p className="pt-4">Volunteer</p>
        </div>
      </div>
      </div>
      

      <div className="flex justify-center p-16">
        <Button
          text="ALL TEAM"
          color="text-button"
          buttoncolor="bg-background"
        />
      </div>

      {/* TESTIMONIALS */}
      <div className="flex flex-col  justify-center items-center pb-14">
        <Title
          text="CHILD STORIES"
          color="text-sky"
          fontSize="text-h7-regular"
        />
        <Title
          text="Read Stories"
          color="text-title"
          fontSize="text-h2-regular"
        />

        <div>Add The Testimonials Here!</div>
      </div>
    </section>
  );
};

export default Volunteer;
