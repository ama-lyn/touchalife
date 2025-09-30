"use client";
import React, { useState } from "react";
import Link from "next/link";
import Title from './ui/Title'
import Button from "./ui/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <section>
      
      <nav className="fixed top-0 w-full z-20 text-title bg-background bg-opacity-90 bg-clip-padding blur-backdrop-filter">
        <div className="flex flex-wrap justify-between items-center py-2 px-3">
            <div className="flex flex-row items-center gap-10">
            <Link href="/">
            <Title text="MAX"/>
          </Link>
          <ul className="hidden md:flex gap-7 ">
            <Link href="#about" className="  hover:text-button">
              <li> About </li>
            </Link>

            <Link href="#causes" className="  hover:text-button">
              <li>Causes </li>
            </Link>

            <Link href="#services" className="  hover:text-button">
              <li> Services </li>
            </Link>

            <Link href="#events" className="  hover:text-button">
              <li> Events </li>
            </Link>

            <Link href="#blog" className="  hover:text-button">
              <li>Blog </li>
            </Link>
          </ul>
            </div>
            <div className="hidden md:flex">
            <Button text="CONTACT" color="text-button" buttoncolor="bg-background"/>
            </div>
        
          {/* MOBILE... */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center p-2 border-[1.5px] rounded-full border-button text-button "
              >
                <AiOutlineMenu className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center p-2 border-[1.5px] rounded-full border-button text-button"
              >
                <AiOutlineClose className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div>
          {navbarOpen ? (
           
              <ul className="flex flex-col py-20 items-center font-semibold h-screen">
              <Link href="#about">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-button"
                >
                  About
                </li>
              </Link>

              <Link href="#causes">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-button"
                >
                  Causes
                </li>
              </Link>

              <Link href="#services">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-button"
                >
                  Services
                </li>
              </Link>

              <Link href="#events">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-button"
                >
                  Events
                </li>
              </Link>

              <Link href="#blog">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-button"
                >
                  Blog
                </li>
              </Link>

              <Link href="#blog">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pt-4"
                >
                  <Button text="CONTACT" color="text-button" buttoncolor="bg-background"/>
                </li>
              </Link>

              
            </ul>
           
          
            
            
          ) : null}
        </div>
        
      </nav>
    
    </section>
  );
};

export default Navbar;
