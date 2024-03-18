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
          As a web developer, I am driven by my passion for coding and
          problem-solving. With hands-on experience in both frontend and backend
          development, I am eager to apply my skills to create impactful
          solutions. I am dedicated to continuous learning and growth, and I am
          excited about the opportunity to collaborate with talented teams to
          build innovative projects that make a difference.
        </p>

        <br />

        <p className="text-xl">
          As a developer, I am not only driven by solving technical challenges,
          but also by creating user-friendly and scalable applications. I
          believe in collaborating closely with other team members to understand
          and meet business requirements and user needs. My passion for
          continuous learning and exploring new technologies makes me a valuable
          asset to your team.
        </p>
      </div>
    </div>
  );
};

export default About;
