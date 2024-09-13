import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a fullstack JavaScript developer, I am driven by a deep passion for
          coding and problem-solving. With extensive hands-on experience in both
          frontend and backend development, I am committed to leveraging my
          skills to create impactful solutions. My dedication to continuous
          learning and professional growth propels me to seek opportunities for
          collaboration with talented teams to build innovative projects that
          truly make a difference.
        </p>

        <br />

        <p className="text-xl">
          I highly value mentorship and constructive feedback as critical
          components of my development as a developer. Teamwork is central to my
          approach, fueling creativity and innovation. Although I am early in my
          career, I have a steadfast commitment to delivering high-quality work.
          I prioritize writing clean, efficient code that is both scalable and
          maintainable. My ultimate goal is to make a positive impact through
          technology, and I am excited about the chance to work on projects that
          improve people's lives. Let's connect and create something
          extraordinary together.
        </p>
      </div>
    </div>
  );
};

export default About;
