import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/Github.png";
import graphql from "../assets/graphql.png";
import NodeJS from "../assets/node.png";
import TypeScript from "../assets/TypeScript.png";
import mongodb from "../assets/mongoDB.png";
import Vue from "../assets/VueJS.png";
import MySQL from "../assets/MySql.png";
import AWS from "../assets/AWS.png";
import NextJS from "../assets/nextjs.png";
import SaSS from "../assets/SaSS.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: NodeJS,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: TypeScript,
      title: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: mongodb,
      title: "mongodb",
      style: "shadow-green-600",
    },
    {
      id: 11,
      src: Vue,
      title: "Vue Js",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: MySQL,
      title: "MySQL",
      style: "shadow-blue-800",
    },
    {
      id: 13,
      src: AWS,
      title: "AWS",
      style: "shadow-gray-600",
    },
    {
      id: 14,
      src: NextJS,
      title: "Next JS",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: SaSS,
      title: "SaSS",
      style: "shadow-pink-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
