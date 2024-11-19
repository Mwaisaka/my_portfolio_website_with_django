import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const slideIntervalTime = 5000;

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, slideIntervalTime);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="w-full m-auto pt-1">
      <div
        className="rounded overflow-hidden shadow-none px-4 py-2 mx-2 sm:mx-4 lg:mx-6"
        style={{ marginBottom: "20px", marginTop: "10px" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-4 md:mb-8">
          My Sample Projects
          <h3 className="text-base md:text-xl font-normal text-gray-800 mb-4 md:mb-8 py-2">
          Here are some of my selected works I have done lately.
            <hr
              className="border-t-2 border-red-700 mb-2"
              style={{ width: "25%", margin: "15px auto" }}
            />
          </h3>
        </h2>

        <div
          className="relative overflow-hidden"
          style={{ width: "100%", height: "auto" }}
        >
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="relative w-full flex-none"
                style={{ flex: "0 0 100%", height: "500px", width: "100px"}}
              >
                <img
                  src={s.image}
                  className="w-[100%] h-[100%] object-cover"
                  alt="Slide"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
                  <span className="text-lg md:text-2xl font-bold text-white text-center">
                    {s.content}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 text-white text-2xl md:text-3xl flex justify-between items-center">
            <button onClick={previousSlide}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
              <BsFillArrowRightCircleFill />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((s, i) => (
              <div
                onClick={() => setCurrent(i)}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 md:w-5 md:h-5 cursor-pointer ${
                  i === current ? "bg-white" : "bg-red-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
