import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://mauasalas.lcstuber.net/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="Mauá Salas"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Mauá Salas</p>
                <p className="text-gray-500 text-[10px]">
                  Mauá Salas allows students and staff at IMT to check and reserve rooms scattered throughout the campus!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://appprint.maua.br/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="Print Mauá"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Print Mauá</p>
                <p className="text-gray-500 text-[10px]">
                  The Print Mauá, provides an engaging platform for new students to explore resources of the campus.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
