import React from "react";
import MyProfilePhoto from "../Images/MyProfilePhoto.png";
import { useNavigate } from "react-router-dom";
import TypeWriter from "./TypeWriter.jsx";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
      style={{
        maxWidth: "1250px",
        margin: "40px auto", // Center the grid horizontally and add top margin
      }}
    >
      <div className="rounded overflow-hidden shadow-none px-6">
        <div>
          <div className="text-2xl mb-4">
            <h3>
              Hello there!
              <span
                className="wave"
                role="img"
                aria-labelledby="wave"
                style={{
                  display: "inline-block",
                  transformOrigin: "70% 70%",
                  animation: "wave-animation 1.5s infinite",
                }}
              >
                👋🏻
              </span>
              <br />I am <strong className="text-4xl">Frank Mwaisaka</strong>,
              {/* <br />a Fullstack Web Developer. */}
              <br />
              <strong className="text-2xl">
                <TypeWriter />
              </strong>
              <hr
                className="border-t-2 border-red-700 mb-2"
                style={{ width: "25%", margin: "15px 0" }}
              />
              <style>
                {`
                  @keyframes wave-animation {
                    0% { transform: rotate(0deg); }
                    15% { transform: rotate(15deg); }
                    30% { transform: rotate(-10deg); }
                    45% { transform: rotate(15deg); }
                    60% { transform: rotate(-10deg); }
                    75% { transform: rotate(5deg); }
                    100% { transform: rotate(0deg); }
                  }
                `}
              </style>
            </h3>
          </div>
          <p className="text-gray-700 text-base text-justify">
            I specialize in full-stack web development, leveraging my creativity
            and technical knowledge to craft visually appealing user interfaces
            that provide exceptional user experiences through interaction with
            the backend.
            <br />
            <br />
            My passion lies in tackling diverse challenges in the dynamic design
            landscape.
            <br />
            <br />I value clarity, empathy, and integrity above all else. These
            ideals guide my approach to problem solving and life in general.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Learn More
          </button>
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
      <div className="flex items-center justify-center">
        <img
          className="w-full max-w-sm h-auto mx-auto mt-4 block transform transition duration-300 ease-in-out hover:scale-105"
          src={MyProfilePhoto}
          alt="Profile Photo"
        />
      </div>
    </div>
  );
}

export default Welcome;
