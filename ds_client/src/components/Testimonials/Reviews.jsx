import React from "react";
import Reviewer from "../Images/Reviewer.png";

function Reviews({reviews}) {   
  
  
  return (
    <div
      className="rounded overflow-hidden shadow-none px-6 py-1"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 py-2">
        What My Clients Say
        <h3 className="text-xl font-normal text-gray-800 mb-0 py-3">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
          <hr
            className="border-t-2 border-red-700 mb-2"
            style={{ width: "20%", margin: "15px auto" }}
          />
        </h3>
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        {reviews?.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="rounded overflow-hidden shadow-none flex flex-col justify-between bg-gray-50"
              style={{ position: "relative" }}
            >
              <div className="px-6 py-1">
                <p className="text-gray-800 text-base mb-1 mt-2 text-center">
                  <div className="font-bold text-red-400 text-center text-4xl">
                    "
                    <img
                      className="w-[25%] mx-auto border-4 border-red-400 rounded-full"
                      src={Reviewer}
                      alt="Reviewer"
                    />
                  </div>
                  <div className="mt-5">{testimonial.message}</div>
                </p>
                <div className="rounded overflow-hidden shadow-none px-6 py-2"></div>
              </div>
              <hr
                className="border-t-2 border-red-700 mb-2"
                style={{ width: "20%", margin: "15px auto" }}
              />
              <div>
                <p className="text-gray-800 text-base mb-3 text-center">
                  {testimonial.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
