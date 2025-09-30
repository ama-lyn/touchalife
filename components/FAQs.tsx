import React from "react";
import Title from "./ui/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="bg-white section flex flex-col items-center">
       <div className="flex flex-col  justify-center items-center md:w-[580px] text-center pb-14">
        <Title text="FAQs" color="text-sky" fontSize="text-h7-regular" />
        <Title
          text="The Answers to All Your Questions"
          color="text-title"
          fontSize="text-h2-regular"
        />
        <hr className="w-11 h-[4px] bg-sky border-0 mt-2 rounded-md" />

        <p className="pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/*ACCORDION*/}
      <div className="md:w-[600px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Do you offer remote or virtual volunteering options?
            </AccordionTrigger>
            <AccordionContent>
              Neque laoreet suspendisse interdum consectetur libero. Lacinia
              quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl
              pretium fusce id velit. Vestibulum lorem sed risus ultricies
              tristique nulla. Sit amet cursus sit amet dictum sit amet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How Can I Participate?</AccordionTrigger>
            <AccordionContent>
              Neque laoreet suspendisse interdum consectetur libero. Lacinia
              quis vel eros donec ac odio tempor.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What's the average weekly time volunteers give?
            </AccordionTrigger>
            <AccordionContent>
              Neque laoreet suspendisse interdum consectetur libero.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What skills are useful for volunteering?
            </AccordionTrigger>
            <AccordionContent>
              Neque laoreet suspendisse interdum consectetur libero. Lacinia
              quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl
              pretium fusce id velit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What perks do volunteers receive?
            </AccordionTrigger>
            <AccordionContent>
              Neque laoreet suspendisse interdum consectetur libero. Lacinia
              quis vel eros donec ac odio tempor.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
