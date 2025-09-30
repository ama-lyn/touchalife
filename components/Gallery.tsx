import React from 'react'
import Title from './ui/Title'
import Button from './ui/Button'

const Gallery = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center text-center pb-14">
        <Title text="OUR GALLERY" color="text-sky" fontSize="text-h7-regular" />
        <Title
          text="Watch Our Gallery"
          color="text-title"
          fontSize="text-h2-regular"
        />
      </div>

      <div className="grid grid-rows-5 md:grid-cols-4 md:grid-rows-none gap-4 md:py-10">
        {/* Image 1 */}
        <img
          src="/images/crowd.png"
          alt="A group of people raising their hands"
          className="rounded-lg shadow-lg w-[130px] md:w-[240px] h-auto object-cover md:col-start-1 md:col-span-1 transform translate-y-[20%]"
         
        />

        {/* Image 3 */}
        <img
          src="images/volunteer1.png"
          alt="A volunteer at an event"
          className="md:hidden rounded-lg shadow-lg w-[200px] md:w-[350px] h-auto object-cover md:col-start-1 md:col-span-1 transform translate-x-[40%] translate-y-[-50%] "
          
        />

        {/* Video */}
        <div className="relative md:col-start-2 md:col-span-2 flex justify-center transform translate-y-[-50%] md:translate-x-[10%] md:translate-y-[0]">
          <img
            src="/images/watching.png"
            alt="Children watching something"
            className="rounded-lg shadow-lg w-[320px] md:w-[600px] h-auto object-cover"
          />
          <button className="absolute inset-0 flex justify-center items-center">
            <img
              src="images/play.png"
              alt="Play video"
              className="w-16 h-16"
            />
          </button>
        </div>
        
        {/* Image 2 */}
        <img
          src="/images/children.png"
          alt="Children playing"
          className="rounded-lg shadow-lg md:w-[185px] h-auto object-cover md:col-start-4 md:col-span-1 transform translate-y-[-50%] translate-x-[80%] md:translate-y-[40%] md:translate-x-[20%]"
          
        />

        {/* Image 3 */}
        <img
          src="images/volunteer1.png"
          alt="A volunteer at an event"
          className="hidden md:flex rounded-lg shadow-lg w-[350px] h-auto object-cover md:col-start-1 md:col-span-1 transform translate-x-[20%] translate-y-[-20%]"
          
        />

        {/* Image 4 */}
        <img
          src="/images/classroom.png"
          alt="Children in a classroom"
          className="rounded-lg shadow-lg md:w-[200px] h-auto object-cover md:col-start-4 md:col-span-1 transform translate-x-[120%] translate-y-[-50%] md:translate-x-[63%] md:translate-y-[-20%]"
          
        />
      </div>

      <div className="flex justify-center pb-16">
        <Button text="EXPLORE ALL" color="text-button" buttoncolor="bg-white" />
      </div>
    </section>
  )
}

export default Gallery
