import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() =>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
              trigger: "#clip",
              start: "center center",
              end: "+=800 center",
              scrub: true,
              pin: true,
              pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "10vw",
            height: "100vh",
            borderRadius:0
        });
    })
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col itmes-center gap-5 ">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Webcome to Zentry
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure
        </div>

        <div className="about-subtext">
            <p> the Game of Games begins-your life, now an epic MMORPG</p>
            <p>Zentry unites every player from countless games and platfroms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
            <img src="img/about.webg" alt="Backgroud" className="abosolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
