import React from "react";
import Title from "./ui/Title";
import Button from "./ui/Button";
import { Progress } from "@/components/ui/progress";

const Causes = () => {
  return (
    <section className="bg-white section">
      <div className="flex flex-col items-center text-center pb-14">
        <Title text="OUR CASES" color="text-sky" fontSize="text-h7-regular" />
        <Title
          text="Our Recent Causes"
          color="text-title"
          fontSize="text-h2-regular"
        />
      </div>

      <div className="flex flex-row flex-wrap gap-8 justify-evenly pb-14">
        <div className="relative flex flex-col">
          <div className="absolute top-4 left-4 opacity-90">
            <Button text="WATER" color="text-white" buttoncolor="bg-sky" />
          </div>
          <img src="/images/Water.png" alt="Water" className="w-80" />
          <div className="bg-background p-6 flex flex-col items-start w-80 gap-6 rounded-b-xl ">
            <Title
              text="Bring together people who care about a cause"
              fontSize="text-h5-regular"
            />
            <div className="flex flex-row gap-32">
              <p className="text-h7-regular ">$4,373</p>
              <p className="text-h8-regular opacity-50 ">$10,000 Goal</p>
            </div>
            <Progress value={33} />
            <Button text="Make a Donation" />
          </div>
        </div>

        <div className="relative flex flex-col">
          <div className="absolute top-4 left-4 opacity-90">
            <Button text="  FOOD" color="text-white" buttoncolor="bg-sky" />
          </div>
          <img src="/images/Food.png" alt="Food" className="w-80" />
          <div className="bg-background p-6 flex flex-col items-start w-80 gap-6 rounded-b-xl ">
            <Title
              text="Together people who care about a cause"
              fontSize="text-h5-regular"
            />
            <div className="flex flex-row gap-36">
              <p className="text-h7-regular ">$5200</p>
              <p className="text-h8-regular opacity-50 ">$7000 Goal</p>
            </div>
            <Progress value={33} />
            <Button text="Make a Donation" />
          </div>
        </div>

        <div className="relative flex flex-col">
          <div className="absolute top-4 left-4 opacity-90">
            <Button text="CHARITY" color="text-white" buttoncolor="bg-sky" />
          </div>
          <img src="/images/charityimg.png" alt="Charity" className="w-80" />
          <div className="bg-background p-6 flex flex-col items-start w-80 gap-6 rounded-b-xl ">
            <Title
              text="People who care about a cause"
              fontSize="text-h5-regular"
            />
            <div className="flex flex-row gap-24">
              <p className="text-h7-regular ">$27,890</p>
              <p className="text-h8-regular opacity-50 ">$50,000 Goal</p>
            </div>
            <Progress value={33} />
            <Button text="Make a Donation" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button text="EXPLORE ALL" color="text-button" buttoncolor="bg-white" />
      </div>
    </section>
  );
};

export default Causes;
