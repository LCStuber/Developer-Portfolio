import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl mt-5">
        <div className="flex flex-row justify-between pt-5">
          <p className="text-gray-300">
            <span className="font-semibold">
              Instituto Mauá de Tecnologia /
            </span>{" "}
            Leader - Tutoring Team
          </p>
          <p className="text-gray-300">Mar 2023 - Present, São Caetano do Sul</p>
        </div>
        <p className="text-gray-300 pt-5">
          Coordinates the IT tutoring team, organizing sessions, managing schedules, and ensuring high-quality academic support for students.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Leadership
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Teaching
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Project Management
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl mt-5">
        <div className="flex flex-row justify-between pt-5">
          <p className="text-gray-300">
            <span className="font-semibold">Mauá Esports /</span> President
          </p>
          <p className="text-gray-300">Aug 2022 - Present, São Caetano do Sul</p>
        </div>
        <p className="text-gray-300 pt-5">
          Defines organizational OKRs, oversees people management, partnerships, and finances, ensuring the team operates effectively.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Leadership
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            People Management
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Project Management
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl mt-5">
        <div className="flex flex-row justify-between pt-5">
          <p className="text-gray-300">
            <span className="font-semibold">Grupo Ambplan /</span> Technology Intern
          </p>
          <p className="text-gray-300">Jun 2022 - Aug 2022, São Caetano do Sul</p>
        </div>
        <p className="text-gray-300 pt-5">
          Contributed to the system internationalization and API integration for data extraction and analysis after winning first place in the SMILE Hackathon.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            API Development
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Data Analysis
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Hackathon Winner
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;