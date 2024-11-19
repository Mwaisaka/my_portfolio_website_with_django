import React from "react";

import Profile1 from "../Images/Profile1.png";
import MyProfilePhoto from "../Images/MyProfilePhoto.png";

function Welcome() {
  return (
    <div
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-5"
      style={{
        maxWidth: "1250px",
        height: "550px",
        marginBottom: "0px",
        marginTop: "40px",
      }}
    >
      <div className="rounded overflow-hidden shadow-none">
        <div className="px-6 py-0">
          <div className="text-2xl mb-0 ">
            <h3>
              Hello there!
              <br />I am <strong className="text-4xl">Frank Mwaisaka</strong>,
              <br />
              a Fullstack Web Developer. <br />
              <hr
                class="border-t-2 border-red-700  mb-2 "
                style={{ width: "25%", margin: "15px auto", marginLeft: "0px" }}
              />
            </h3>
          </div>
          <p className="text-gray-700 text-base text-justify">
            I specialize in full-stack web development, leveraging my creativity
            and technical knowledge to craft visually appealing user interfaces
            that provide exceptional user experiences through interaction with
            the backend.
            <br />
            <br />
            My passion lies in tackling diverse challenges in the dynamic design landscape.
            <br />
            <br />
            I value clarity, empathy, and integrity above all else. These
            ideals guide my approach to problem solving and life in general.
          </p>
          <a
            href="/about"
            className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-0 px-2 rounded mt-4"
          >
            Learn More
          </a>
          <br />
          <br />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">
            #FullStackWebDevelopment
          </span>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">
            #WebScraping
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">
            #APIDevelopment
          </span>
        </div>
      </div>
      <div>
        <img
          className="w-auto h-[75%] mx-auto mt-6 block transform transition duration-300 ease-in-out hover:scale-105"
          src={MyProfilePhoto}
          alt="Profile Photo"
        />
      </div>
    </div>
  );
}

export default Welcome;
