import React from "react";
import Title from "./ui/Title";
import Link from 'next/link';
import about from "@/components/About";

const Footer = () => {
  return (
    <section>
      {/* CONTACT */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="bg-[#EAE9DA] flex flex-row items-center gap-4 p-8">
          <img src="/images/phone.png" alt="Phone Icon" className="w-[80px]" />
          <div>
            <p className="text-title opacity-50 text-h8-regular pb-2">Phone</p>
            <p className="text-title text-h7-regular">+254 790-034-862</p>
          </div>
        </div>

        <div className="bg-[#E3E1CB] flex flex-row items-center gap-4 p-8">
          <img src="/images/mail.png" alt="Phone Icon" className="w-[80px]" />
          <div>
            <p className="text-title opacity-50 text-h8-regular pb-2">Email</p>
            <p className="text-title text-h7-regular">info@max.com</p>
          </div>
        </div>

        <div className="bg-[#CBC8AD] flex flex-row items-center gap-4 p-8">
          <img
            src="/images/location.png"
            alt="Phone Icon"
            className="w-[80px]"
          />
          <div>
            <p className="text-title opacity-50 text-h8-regular pb-2">
              Address
            </p>
            <p className="text-title text-h7-regular">
              Dandora Street <br />
              Embakasi, Nairobi
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER*/}
      <div className="bg-sky px-[20px] pt-[32px] md:px-[135px] md:pt-[64px] pb-[8px]">
  <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start md:justify-between gap-16 md:gap-4 border-b pb-[64px]">
    <Title text="MAX" color="text-white" />

    <div className="opacity-90 flex flex-col items-center md:items-start">
      <Title text="MENU" color="text-white" fontSize="text-h5-regular" />
      <div className="pt-1 md:pt-4 text-white text-center md:text-left">
        <Link href="#About"> <p>About</p></Link>
        <Link href="#Causes"> <p>Causes</p></Link>
        <Link href="#Services"> <p>Services</p></Link>
        <Link href="#Events"> <p>Events</p></Link>
      </div>
    </div>

    <div className="opacity-90 flex flex-col items-center md:items-start">
      <Title text="SERVICE" color="text-white" fontSize="text-h5-regular" />
      <div className="pt-1 md:pt-4 text-white opacity-80 text-center md:text-left">
        <p>Direct Help</p>
        <p>Giving Information</p>
        <p>Raising Awareness</p>
        <p>Relieving Poverty</p>
      </div>
    </div>

    <div className="flex flex-row gap-2">
      <img src="/images/facebook.png" alt="Facebook" className="w-[50px] h-[50px]" />
      <img src="/images/twitter.png" alt="Twitter" className="w-[50px] h-[50px]" />
      <img src="/images/instagram.png" alt="Instagram" className="w-[50px] h-[50px]" />
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-between text-white pt-8 text-h8-light ">
  <p className="opacity-70 text-center md:text-left">
      Copyright © 2023 Dawit Tewelde.{" "}
      <span className="block md:inline md:ml-2 pt-1">All Rights Reserved.</span>
    </p>
    <div className="flex flex-row gap-10 opacity-90 pt-2">
      <p>Terms of Use</p>
      <p>Privacy Policy</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Footer;
