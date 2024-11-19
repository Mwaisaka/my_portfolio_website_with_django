import React from "react";
import { Link } from "react-router-dom";
import StayInTouch from "../Home/StayInTouch";
import Reviews from "../Testimonials/Reviews";
import Skills from "./Skills";
import Services from "../About/Services";
import Experience from "./Experience";


import AboutMe from "../Images/AboutMe.png";
import Feedback from "../Testimonials/Feedback";

export default function About() {
  
  return (
    <div className="animate-swipeUp w-full m-auto pt-3 max-w-none">
      <div
        className="rounded overflow-hidden shadow-none px-6 py-0"
        // style={{
        //   marginBottom: "0px",
        //   marginTop: "0px",
        // }}
      >
        <div className="bg-gray-100 py-2">
          <h1 class="text-5xl font-bold text-center text-gray-800 mb-4">
            About Me
            <h3 class="text-2xl font-normal text-gray-800 mt-4 mb-2">
              Turning ideas into real life products is my calling.
              <hr
                class="border-t-2 border-red-700  mb-2"
                style={{ width: "15%", margin: "15px auto" }}
              />
            </h3>
          </h1>
        </div>

        <div
          className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
          style={{
            maxWidth: "1200px",
            height: "auto",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          <div className="rounded overflow-hidden shadow-none">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1 ">
                <h3>Developing With a Passion While Exploring The World.</h3>
                <hr
                  class="border-t-2 border-red-700  mb-1 py-1"
                  style={{
                    width: "20%",
                    margin: "15px auto",
                    marginLeft: "0px",
                  }}
                />
              </div>
              <p className="text-gray-700 text-base text-justify">
                I take great pride in honing my craft, continuously pushing the
                boundaries of what I can achieve. Whether it’s tackling
                intricate problems or sharing my knowledge through mentoring, I
                find joy in the process of learning and teaching. <br />
                <br />
                My curiosity drives me to explore beyond the surface, diving
                deep into understanding how things work and how they can be
                improved.
              </p>
              <a
                href="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-none px-6 py-0">
            <p className="text-gray-700 text-base text-justify">
              <br />
              Outside of my professional life, I am passionate about immersing
              myself in new experiences. I am an avid traveler, constantly
              seeking new landscapes, cultures, and perspectives that enrich my
              view of the world. Hiking gives me a chance to reconnect with
              nature, and photography allows me to capture the beauty I find
              along the way.
              <br />
              <br />
              Volunteering is close to my heart, as it gives me the opportunity
              to give back to the community and connect with people from all
              walks of life. I enjoy meeting new people, exchanging stories, and
              finding common ground that often leads to meaningful friendships.
            </p>
          </div>
          <div className="rounded overflow-hidden shadow-none px-6 py-4 block transform transition duration-300 ease-in-out hover:scale-105">
            <img
              className="w-full h-full"
              src={AboutMe}
              alt="Educational excursion"
            />
          </div>
        </div>
      </div>
      <Services />
      {/* <Experience /> */}
      <Skills />
      <Feedback /> 
     
      <StayInTouch />
    </div>
  );
}
