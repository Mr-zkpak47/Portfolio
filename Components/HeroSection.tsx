"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { TypeAnimation } from 'react-type-animation';
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center justify-center items-center my-0 py-0 sm:py-32 md:flex-row md:space-x-4 md:text-left md:pt-30 md:pb-13">
        <div className="md:w-1/2 mdmt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/img.jpeg"
            alt=""
            height={300}
            width={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className={`inline-block font-bold text-xl mt-6 md:text-xl md:mt-0 `}>
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `I'm a Freelancer.`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "I'm a Blogger.",
        1000,
        "I'm a Youtuber.",
        1000,
        "I'm a Web Developer.",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block'}}
      repeat={Infinity}
    />
          </h1>
          <p className="text-lg mt-4 mb-6 text-justify md:text-xl tracking-wide">
            I&#39;m a dedicated
            <span className="font-semifold text-red-600 pb-2">
              {" "}Software Engineer{" "}
            </span>
            located in Pakistan, driven by a passion for crafting innovative
            software solutions that enhance and enrich lives. My mission is to
            create software that not only simplifies tasks but also adds depth
            and meaning to our daily experiences.
          </p>
          <br />
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 
          py-3 bg-red-600 rounded shadow hover:bg-red-700 cursor-pointer my-5"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
        >
          <HiArrowDown id="arrow"  size={35} className="animate-bounce cursor-pointer"/>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
