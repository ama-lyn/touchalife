import React from "react";
import Title from "./ui/Title";
import Button from "./ui/Button";

const About = () => {
  return (
    <section className="bg-background section">

      <div className="flex flex-row flex-wrap items-center justify-center">
        <img src="/images/about.png" alt="About" className=" md:w-1/2 " />

        <div className="flex flex-col items-start w-[400px]">
          <Title text="ABOUT US" color="text-sky" fontSize="text-h4-regular" />
          <Title
            text="Highest form of love"
            color="text-title"
            fontSize="text-h1-48-regular"
          />
          <p className="text-title opacity-60 pt-6 pb-10 text-h6-regular">
            A group of energetic and passionate young people who have a heart for their communities and their agenda being to create an impact through their actions of love.
We aim to inspire our stakeholders, and steer our long-term direction towards fulfilling our purpose in the community.
          </p>
          <Button
            text="ABOUT US"
            color="text-button"
            buttoncolor="bg-background"
          />
        </div>
      </div>

{/* Stats */}

      <div className="flex flex-col items-center text-center py-16">
        <Title text="Whatever it is that you care about, there will be a charity working on it." fontSize="text-h4-regular"/>

       <div className="flex flex-row flex-wrap justify-center gap-8 pt-8">
       <div className="flex flex-row bg-white gap-4 p-8 items-center rounded-md w-80">
          <Title text="42" fontSize="text-h2-regular"/>
          <div className="flex flex-col">
            <p className="text-title  text-h7-regular">People</p>
            <p className="text-title text-[14px] opacity-60">Prevention of Cruelty</p>
          </div>
        </div>

        <div className="flex flex-row bg-white gap-4 p-8 items-center rounded-md w-80">
          <Title text="73" fontSize="text-h2-regular"/>
          <div className="flex flex-col">
            <p className="text-title  text-h7-regular">Society</p>
            <p className="text-title text-[14px] opacity-60">Direct Relief</p>
          </div>
        </div>

        <div className="flex flex-row bg-white gap-4 p-8 items-center rounded-md w-80">
          <Title text="09" fontSize="text-h2-regular"/>
          <div className="flex flex-col">
            <p className="text-title  text-h7-regular">Project</p>
            <p className="text-title text-[14px] opacity-60">Research Hospital</p>
          </div>
        </div>


       </div>
      </div>

{/* Volunteer */}


    <div className="flex flex-row flex-wrap items-center justify-center gap-10 md:gap-20 py-16">
      <div className="flex flex-col items-start w-[400px]">
          <Title text="Mission" color="text-sky" fontSize="text-h4-regular" />
          <Title
            text="Unselfish love of one's fellow men"
            color="text-title"
            fontSize="text-h1-48-regular"
          />
          <p className="text-title opacity-60 pt-6 pb-10 text-h6-regular">
          To empower and uplift underserved communities through education, mentorship, and sustainable development initiatives.
          </p>
          <Button
            text="BE A VOLUNTEER"
            color="text-button"
            buttoncolor="bg-background"
          />
        </div>

        <img src="/images/volunteer.png" alt="About" className="md:w-1/2  " />
    </div>
    </section>
  );
};

export default About;
