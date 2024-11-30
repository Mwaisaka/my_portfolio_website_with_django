import React from "react";
import TodoApp from "../Images/Todo-App.png";
import Weather from "../Images/Weather.png";
import ProjectsCard from "./ProjectsCard.jsx";

function Projects() {
  const projects = [
    {
      image: TodoApp,
      title: "Simple To-Do App",
      description:
        "This is an app that helps users keep track of tasks they need to complete. It serves as a personal productivity tool for organizing daily activities, goals, or responsibilities.",
      features: ["Task Management", "Task Viewing", "Task Editing", "Task Deletion"],
      link: "https://todo-app-j0vq.onrender.com/",
    },
    {
      image: Weather,
      title: "Weather App",
      description:
        "This is an App that helps users check the weather for a given city or town.",
      features: ["Rain", "Humidity", "Wind speed", "Wind Direction", "Precipitation"],
      link: "",
    },
    {
    //   image: Recipe App,
      title: "Recipe Web App",
      description:
        "This is a platform designed to provide users with access to various recipes for cooking and baking. The App is ideal to food enthusiasts, home cooks, and even professional chefs by offering a rich collection of recipes, cooking tips, and meal planning tools.",
      features: ["Provides Recipes", "Inspires Cooking", "Organizes Recipes", "Enhances User Experience","Engages Community"],
      link: "",
    },
    {
        // image: Weather,
        title: "My Blog",
        description:
          "This platform offers a wide range of knowlegdge and insights on Technology, Politics, Lifestyle, Culture, Travel e.t.c.",
        features: ["Technology", "Politics", "Lifestyle", "Culture", "Travel"],
        link: "",
      },
  ];

  return (
    <div
      className="rounded overflow-hidden shadow-none px-6 py-1"
      style={{ marginBottom: "20px", marginTop: "20px" }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Recent Works
        <h3 className="text-2xl font-normal text-gray-800 mt-4 mb-8">
          Here are a few projects I have worked on recently.
          <hr
            className="border-t-2 border-red-700 mb-2"
            style={{ width: "15%", margin: "15px auto" }}
          />
        </h3>
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
