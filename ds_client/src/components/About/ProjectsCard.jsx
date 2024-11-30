import React from 'react';
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const ProjectsCard = ({ image, title, description, features, link }) => (
    <div className="rounded overflow-hidden shadow-lg border-4 block transform transition duration-300 ease-in-out hover:scale-105">
      <div className="px-6 py-2">
        <img className="w-[100%] mx-auto block mb-2 border-4" src={image} alt={title} />
        <h3 className="text-2xl text-center font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-800 text-base px-6 mb-2 text-justify">
          {description}
          <br />
          <br />
          Key features are:
          <ul className="list-disc ml-6">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </p>
      </div>
      <div className="flex justify-center mb-2 block transform transition duration-300 ease-in-out hover:scale-115">
        <button
          onClick={() => (window.location.href = link)}
          className="bg-gray-400 text-white p-2 flex items-center justify-center hover:bg-gray-700 transition"
        >
          <BsArrowUpRightSquareFill size={20} className="mr-2" />
          <h3>View Project</h3>
        </button>
      </div>
    </div>
  );

  export default ProjectsCard;