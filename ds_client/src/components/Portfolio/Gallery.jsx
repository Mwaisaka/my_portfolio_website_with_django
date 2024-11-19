import React from "react";

import gallery1 from "../Images/gallery1.png";
import gallery2 from "../Images/gallery2.png";
import gallery3 from "../Images/gallery3.png";
import gallery4 from "../Images/gallery4.png";
import gallery5 from "../Images/gallery5.png";
import gallery6 from "../Images/gallery6.png";
import gallery7 from "../Images/gallery7.png";
import gallery8 from "../Images/gallery8.png";
import gallery9 from "../Images/gallery9.png";

function Gallery() {
  return (
    <div
      className="animate-swipeUp rounded overflow-hidden shadow-none px-6 py-4"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
        What Service You Will Get From Me
        <h3 class="text-base font-normal text-gray-800 mt-4 mb-8">
          I turn ideas into extraordinary digital products.
          <hr
            class="border-t-2 border-red-700  mb-2"
            style={{ width: "15%", margin: "15px auto" }}
          />
        </h3>
      </h2>

      <div
        
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      >
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="rounded overflow-hidden shadow-none col-span-2">
            <span className="px-6 py-4">
              <img
                className="w-auto mx-auto block transform transition duration-300 ease-in-out hover:scale-105"
                src={gallery1}
                alt="Forest"
              />
            </span>
          </div>
          <div className="rounded overflow-hidden shadow-none">
            <span className="px-6 py-4">
              <img
                className="w-auto mx-auto block transform transition duration-300 ease-in-out hover:scale-105"
                src={gallery2}
                alt="Forest"
              />
            </span>
            <span className="px-6 py-4">
              <img
                className="w-auto mx-auto block transform transition duration-300 ease-in-out hover:scale-105"
                src={gallery3}
                alt="Forest"
              />
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-1 gap-5">
          <div className="rounded overflow-hidden shadow-none">
            <div className="flex justify-between px-6 py-4">
              <img className="w-auto block transform transition duration-300 ease-in-out hover:scale-105" src={gallery4} alt="Forest" />
              <img className="w-auto block transform transition duration-300 ease-in-out hover:scale-105" src={gallery5} alt="Forest" />
              <img className="w-auto block transform transition duration-300 ease-in-out hover:scale-105" src={gallery6} alt="Forest" />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden shadow-none">
            <div className="px-6 py-4">
              <img
                className="w-auto mx-auto block transform transition duration-300 ease-in-out hover:scale-105"
                src={gallery7}
                alt="Forest"
              />
            </div>
            <div className="px-6 py-4">
              <img
                className="w-auto mx-auto block transform transition duration-300 ease-in-out hover:scale-105"
                src={gallery8}
                alt="Forest"
              />
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-none col-span-2">
            <span className="px-6 py-4">
              <img
                className="w-auto mx-auto block transform transition duration-300 ease-in-out hover:scale-105"
                src={gallery9}
                alt="Forest"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
