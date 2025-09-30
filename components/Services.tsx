import React from 'react'
import Title from './ui/Title'
import Button from './ui/Button';



const Services = () => {
    const services = [
        {
          imgSrc: "images/charity.png",
          imgAlt: "Charity",
          title: "Charity",
          description:
            "A charity must have one or more of the purposes which have been defined in law. ",
        },
        {
          imgSrc: "images/solidarity.png",
          imgAlt: "Solidarity",
          title: "Food",
          description:
            "These include things like: relieving poverty, education, religion, protecting the environment.",
        },
        {
          imgSrc: "images/love.png",
          imgAlt: "Love",
          title: "Water",
          description:
            "Education, environment, animal welfare, human rights and community development.",
        },
        
      ];
    
  return (
    <section className="bg-white section">
      <div className="flex flex-col pb-14">
        <Title text="OUR SERVICES" color="text-sky" fontSize="text-h7-regular" />
        <Title
          text="Services We Provide"
          color="text-title"
          fontSize="text-h2-regular"
        />
      </div>

      <div className=" flex flex-row flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-background w-[300px] rounded-xl py-10 px-8"
          >
            <div className="flex flex-row items-center">
              <img
                src={service.imgSrc}
                alt={service.imgAlt}
                className="h-14 pb-2 border-b-2 text-[#333333]"
              />
              <div className="pb-6 border-b border-gray pl-4 pr-30 whitespace-nowrap">
                <Title text={service.title} fontSize="text-h6-light" />
              </div>
            </div>
            <p className="text-title opacity-50 py-10">{service.description}</p>
            <Button text='LEARN MORE'/>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-10">
        <Button text="EXPLORE ALL" color="text-button" buttoncolor="bg-white" />
      </div>
    </section>
  )
}

export default Services
