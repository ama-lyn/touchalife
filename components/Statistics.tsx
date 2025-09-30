import React from "react";
import Title from './ui/Title';

const stats = [
  { number: "20M", description: "Number of Supporters" },
  { number: "15k+", description: "Volunteers Worldwide" },
  { number: "68k+", description: "We've helped raised" },
];

const Statistics = () => {
  return (
    <section className="bg-button">
      <div className="flex w-[1080px] px-[135px]">
        <div className="flex gap-10 p-7 w-[820px] bg-white rounded-l-lg">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <Title text={stat.number} color="text-sky" />
              <hr className="w-11" />
              <Title text={stat.description} fontSize="text-h8-light" />
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[260px] gap-2 bg-red p-7 rounded-r-lg">
          <hr className="w-11" />
          <Title
            text="Our goal is to help poor people"
            color="text-white"
            fontSize="text-h7-light"
          />
          <div className="flex items-center gap-3">
            <Title
              text="become volunteer"
              color="text-white"
              fontSize="text-[13px]"
            />
            <img src="/images/arrow-right.png" alt="right arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
