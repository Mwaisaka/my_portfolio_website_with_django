import React from "react";

function Experience() {
  // Helper function to calculate the years of experience
  const calculateExperience = (startYear, endYear) => endYear - startYear;

  const experiences = [
    {
      title: "HTML5",
      startYear: 2006,
      endYear: 2024,
    },
    {
      title: "CSS3",
      startYear: 2007,
      endYear: 2024,
    },
    {
      title: "JavaScript",
      startYear: 2007,
      endYear: 2024,
    },
    {
      title: "React JS",
      startYear: 2007,
      endYear: 2024,
    },
    {
      title: "Python",
      startYear: 2007,
      endYear: 2024,
    },
    {
      title: "Flask",
      startYear: 2010,
      endYear: 2024,
    },
    {
      title: "Django",
      startYear: 2010,
      endYear: 2024,
    },
    {
      title: "Typescript",
      startYear: 2010,
      endYear: 2024,
    },
    {
      title: "Java",
      startYear: 2008,
      endYear: 2024,
    },
  ];

  return (
    <div
      className="rounded overflow-hidden shadow-none px-6 py-1"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
        My Skills
        <h3 className="text-xl font-normal text-gray-800 mb-2 py-2">
          
          <hr
            className="border-t-2 border-red-700 mb-0"
            style={{ width: "10%", margin: "15px auto" }}
          />
        </h3>
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        {experiences.map((experience, index) => {
          const duration = calculateExperience(
            experience.startYear,
            experience.endYear
          );
          const percentage = (duration / 20) * 100; // Adjust divisor to fit a reasonable bar length
          const barWidth = `${percentage}%`; 

          return (
            <div
              key={index}
              className="rounded overflow-hidden shadow-none flex flex-col justify-between bg-gray-100 mb-4"
              style={{ position: "relative" }}
            >
              <div className="px-0 py-5" >
                <h3 className="text-xl text-left  text-gray-800 mb-0">
                  {experience.title}
                </h3>
                {/* <h2 className="text-xl text-left font-normal text-red-500 mb-5">
                  {experience.startYear} - {experience.endYear}
                </h2> */}
                {/* <p className="text-gray-800 text-base mb-1 text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p> */}
              </div>
              <div
                className="relative bg-gray-200 h-5 mt-auto"
                style={{ width: "100%" }}
              >
                <div
                  className="absolute bg-orange-500 h-[70%]"
                  style={{ width: barWidth, left: 0 }}
                />
                <span
                  className="absolute text-white text-xs font-semibold"
                  style={{
                    left: '0',
                    transform: 'translateY(-50%)',
                    top: '50%',
                    whiteSpace: 'nowrap',
                    paddingLeft: '10px',
                  }}
                >
                  {/* {experience.title} */}
                </span>
                {/* Percentage Display */}
                {/* <span
                  className="absolute text-xs font-semibold text-gray-800"
                  style={{
                    right: "10px",
                    top: "-50px", // Adjust this to position above the bar
                    transform: "translateY(50%)",
                  }}
                >
                  {percentage.toFixed(0)}%
                </span> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
