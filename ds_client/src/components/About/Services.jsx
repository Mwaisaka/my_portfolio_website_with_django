import React from "react";
import Web from "../Images/Web.png";
import WebScraping from "../Images/WebScraping.png";
import EthicalHacking from "../Images/EthicalHacking.png";
import { BsArrowRightCircleFill } from "react-icons/bs";

function Services() {
  return (
    <div
      className="rounded overflow-hidden shadow-none px-6 py-1"
      style={{
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Capabilities
        <h3 class="text-2xl font-normal text-gray-800 mt-4 mb-8">
          My passion and goal is to help you make your business standout.
          <hr
            class="border-t-2 border-red-700  mb-2"
            style={{ width: "20%", margin: "15px auto" }}
          />
        </h3>
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        style={{
          maxWidth: "1200px",
          height: "auto",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <div className="rounded overflow-hidden shadow-none">
          <div className="px-6 py-4">
            <img className="w-[25%] mx-auto block mb-2" src={Web} alt="Web" />
            <h3 class="text-2xl text-center font-bold text-gray-800 mb-5">
              Web Development
            </h3>
            <p class="text-gray-800 text-base px-6 mb-5 text-justify">
              <ul class="list-disc">
                <li>
                  Front-end development focuses on the visual and interactive
                  aspects of a website that users interact with, using
                  technologies like HTML, CSS, and JavaScript.{" "}
                </li>
              </ul>

              <br />
              <ul class="list-disc">
                <li>
                  Back-end development handles the server, database, and
                  application logic, often using languages like Python, PHP, or
                  Node.js, and databases like MySQL or MongoDB.
                </li>
              </ul>
              <br />
              <ul class="list-disc">
                <li>Database management and DevOps/Development.</li>
              </ul>
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => (window.location.href = "/another-page")} // Replace with your actual page URL
              className="bg-gray-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <BsArrowRightCircleFill size={28} />
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-none">
          <div className="px-6 py-4">
            <img
              className="w-[25%] mx-auto block mb-2"
              src={WebScraping}
              alt="Webscraping"
            />
            <h3 class="text-2xl text-center font-bold text-gray-800 mb-5">
              Web Scrapping
            </h3>
            <p class="text-gray-800 text-base px-6 mb-5 text-justify">
              The automated process of extracting data from websites. It
              involves using software tools, scripts, or bots to gather
              information from web pages without interacting directly with the
              website's underlying databases or APIs. <br /><br />This technique is commonly
              used in:
              <ul class="list-disc ml-6">
                <li>Data collection for research.</li>
              </ul>
              <ul class="list-disc ml-6">
                <li>Price Monitoring.</li>
              </ul>
              <ul class="list-disc ml-6">
                <li>Content agregation.</li>
              </ul>
              <ul class="list-disc ml-6">
                <li>Lead generation.</li>
              </ul>
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => (window.location.href = "/another-page")} // Replace with your actual page URL
              className="bg-gray-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <BsArrowRightCircleFill size={28} />
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-one">
          <div className="px-6 py-4">
            <img
              className="w-[25%] mx-auto block mb-2"
              src={EthicalHacking}
              alt="Forest"
            />
            <h3 class="text-2xl text-center font-bold text-gray-800 mb-5">
              API Development
            </h3>
            <p class="text-gray-800 text-base px-6 mb-5 text-justify">
              Designing, creating, and maintaining Application Programming
              Interfaces (APIs), which enable software applications to
              communicate with each other. APIs allow different systems to
              interact by defining a set of rules and protocols for exchanging
              data and functionality. <br />The APIs include:
              <ul class="list-disc ml-6">
                <li>RESTful APIs.</li>
              </ul>
              <ul class="list-disc ml-6">
                <li>SOAP APIs.</li>
              </ul>
              <ul class="list-disc ml-6">
                <li>GraphQL.</li>
              </ul>
              <ul class="list-disc ml-6">
                <li>WebSocket APIs.</li>
              </ul>
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => (window.location.href = "/another-page")} // Replace with your actual page URL
              className="bg-gray-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <BsArrowRightCircleFill size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
