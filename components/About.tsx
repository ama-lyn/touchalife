import React from "react";
import Title from "./ui/Title";
import Button from "./ui/Button";

const About = () => {
  return (
    <section className="bg-background section">

      {/* Intro */}
      <div className="flex flex-row flex-wrap items-center justify-center">
        <img src="/images/About.jpg" alt="About" className="md:w-1/2" />

        <div className="flex flex-col items-start w-[400px]">
          <Title text="ABOUT US" color="text-sky" fontSize="text-h4-regular" />
          <Title
            text="Touch A Life Foundation"
            color="text-title"
            fontSize="text-h1-48-regular"
          />
          <p className="text-title opacity-60 pt-6 pb-10 text-h6-regular">
            Touch A Life Foundation is a community-driven organization formed by passionate individuals 
            with a heart for positive change. Our purpose is to <span className="font-semibold">touch lives</span>, 
            with a strong focus on empowering children to discover their dreams, their “why,” 
            and their purpose in life. Through mentorship, psychosocial support, and partnerships, 
            we create impact that lasts.
          </p>
          <Button
            text="LEARN MORE"
            color="text-button"
            buttoncolor="bg-background"
          />
        </div>
      </div>

      {/* Stats / Impact */}
      <div className="flex flex-col items-center text-center py-16">
        <Title 
          text="Whatever it is that you care about, there will be a charity working on it." 
          fontSize="text-h4-regular"
        />

        <div className="flex flex-row flex-wrap justify-center gap-8 pt-8">

          <div className="flex flex-row bg-white gap-4 p-8 items-center rounded-md w-80">
            <Title text="2+" fontSize="text-h2-regular"/>
            <div className="flex flex-col">
              <p className="text-title text-h7-regular">Major Events</p>
              <p className="text-title text-[14px] opacity-60">Schools & Children’s Homes</p>
            </div>
          </div>

          <div className="flex flex-row bg-white gap-4 p-8 items-center rounded-md w-80">
            <Title text="3+" fontSize="text-h2-regular"/>
            <div className="flex flex-col">
              <p className="text-title text-h7-regular">Focus Areas</p>
              <p className="text-title text-[14px] opacity-60">Schools • Homes • Parents</p>
            </div>
          </div>

          <div className="flex flex-row bg-white gap-4 p-8 items-center rounded-md w-80">
            <Title text="10+" fontSize="text-h2-regular"/>
            <div className="flex flex-col">
              <p className="text-title text-h7-regular">Committee Members</p>
              <p className="text-title text-[14px] opacity-60">Passionate Volunteers</p>
            </div>
          </div>

        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 md:gap-20 py-16">
        <div className="flex flex-col items-start w-[400px]">
          <Title text="Our Mission" color="text-sky" fontSize="text-h4-regular" />
          <Title
            text="Empowering Children, Inspiring Purpose"
            color="text-title"
            fontSize="text-h1-48-regular"
          />
          <p className="text-title opacity-60 pt-6 pb-10 text-h6-regular">
            We exist to nurture children’s dreams and help them discover their “why.” 
            Through mentorship, parental engagement, material support, and follow-ups, 
            we ensure that every child has the opportunity to rise above limitations 
            and find meaning in life.
          </p>
          <Button
            text="JOIN US"
            color="text-button"
            buttoncolor="bg-background"
          />
        </div>
        <img src="/images/Mission.jpg" alt="Volunteer" className="md:w-1/2" />
      </div>

      {/* Vision */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 md:gap-20 py-16">
        <img src="/images/vision.jpg" alt="Vision" className="md:w-1/2" />
        <div className="flex flex-col items-start w-[400px]">
          <Title text="Our Vision" color="text-sky" fontSize="text-h4-regular" />
          <Title
            text="Touching Lives With Love and Purpose"
            color="text-title"
            fontSize="text-h1-48-regular"
          />
          <p className="text-title opacity-60 pt-6 pb-10 text-h6-regular">
            To build a society where children grow with confidence, 
            purpose, and support systems that enable them to thrive. 
            We believe in sustainable impact through education, mentorship, 
            and partnerships that extend love to communities.
          </p>
          <Button
            text="OUR VISION"
            color="text-button"
            buttoncolor="bg-background"
          />
        </div>
      </div>

    </section>
  );
};

export default About;
