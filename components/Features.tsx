import React from "react";
import Title from './ui/Title'

const Features = () => {
  const features = [
      {
      imgSrc: "images/charity.png",
      imgAlt: "Charity",
      title: "Integrity",
      description:
        "We uphold honesty, transparency, and accountability in all our actions and decisions.",
    },
    {
      imgSrc: "images/solidarity.png",
      imgAlt: "Solidarity",
      title: "Collaboration",
      description:
        "We foster partnerships and teamwork to achieve greater impact and effectiveness in our programs and initiatives.",
    },

    {
      imgSrc: "images/love.png",
      imgAlt: "Love",
      title: "Empowerment",
      description:
        "We empower individuals to become agents of change in their own lives and communities.",
    },
    {
      imgSrc: "images/flower.png",
      imgAlt: "Flower",
      title: "Sustainability",
      description:
        "We prioritize environmentally sustainable practices and long-term solutions in our projects and operations.",
    },
  ];

  return (
    <section className="bg-white section">
      <div className="flex flex-col items-center text-center pb-10">
        <Title text="OUR CORE VALUES" color="text-sky" fontSize="text-h4-regular" />
        <Title
          text="We believe in fairness, diversity, and creating inclusive spaces where everyone feels valued and respected."
          color="text-title"
          fontSize="text-h2-regular"
          responsiveFontSize="text-h4-regular"
        />
      </div>

      <div className=" flex flex-row flex-wrap gap-8 justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-background w-[330px] md:w-[440px] rounded-xl py-8 px-6 md:py-10 md:px-8"
          >
            <div className="flex flex-row justify-items-center items-end">
              <img
                src={feature.imgSrc}
                alt={feature.imgAlt}
                className="h-14 pb-2 border-b-2 text-[#333333]"
              />
              <div className="pb-2 border-b border-gray pl-4 md:pr-36 whitespace-nowrap">
                <Title text={feature.title} fontSize="text-h5-light" />
              </div>
            </div>
            <p className="text-title opacity-50 pt-6">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
