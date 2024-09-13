import React from "react";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import Filmvisarna from "../assets/portfolio/Filmvisarna.png";
import NodeJS from "../assets/portfolio/NodeJS-API.jpg";
import AutZ from "../assets/portfolio/AuthZ.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Ecommerce,
      demoLink: "",
      codeLink: "https://github.com/MohamadAliHassan/Ecommerce",
    },
    {
      id: 2,
      src: Filmvisarna,
      demoLink: "https://filmvisarna-team1.nodehill.se/",
      codeLink: "https://github.com/j-carlander/Filmvisarna",
    },
    {
      id: 3,
      src: NodeJS,
      demoLink: "",
      codeLink: "",
    },
    {
      id: 4,
      src: AutZ,
      demoLink: "",
      codeLink: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-10 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink} target="_blank">
                  <button
                    onClick={codeLink}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
