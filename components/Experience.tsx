import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl mt-5">
        <div className="flex flex-row justify-between pt-5">
          <p className="text-gray-300">
            <span className="font-semibold">
              Instituto Mauá de Tecnologia /
            </span>{" "}
            Student Tutor
          </p>
          <p className="text-gray-300">Mar 2023 - Present, São Caetano do Sul</p>
        </div>
        <p className="text-gray-300 pt-5">
          Helps colleagues from the same course with tasks and doubts they might have
          during the computer science undergraduate track.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Full-Stack
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Documentation
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Communication
          </div>
        </div>
      </div>
      <div className="container mx-auto 2xl mt-5">
        <div className="flex flex-row justify-between pt-5">
          <p className="text-gray-300">
            <span className="font-semibold">Mauá Esports /</span> Marketing Director
          </p>
          <p className="text-gray-300">Aug 2023 - Present, São Caetano do Sul</p>
        </div>
        <p className="text-gray-300 pt-5">
          Coordinates marketing staff, developing plans to publish announcements and
          events about the entity. Also, making the bridge between the team and the
          public, interacting on social media and in person.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Communication
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Social Media
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Video Editing
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Leadership
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            eSports
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
