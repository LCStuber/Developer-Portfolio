import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Hi, there! I am {Math.floor((new Date().getTime() - new Date('2004-03-24').getTime()) / (365.25 * 24 * 60 * 60 * 1000))} and passionate about technology and innovation, with experience in leadership and team management in both academic and professional environments. As the HR director of a university graduation committee and president of a student Esports organization at the Instituto Mauá de Tecnologia, I have developed strong skills in people management, event organization, and promoting initiatives that positively impact the community.
          <br />
          <br />
          During High School, I was recognized with the NHS (National Honor Society) title by the University of Missouri. In my academic journey at Instituto Mauá de Tecnologia, I was recognized as the top student, earning a full scholarship. Currently, I lead the tutoring team and represent the IT courses, with certifications in essential areas such as cybersecurity, network infrastructure, and cloud computing. Recently, I joined LinkedIn as a Central Operations Intern, where I am eager to further develop my skills in data analysis and process automation. I am always seeking new challenges that allow me to apply and expand my knowledge, contributing to digital transformation with security and efficiency.
        </p>
      </div>
    </section>
  );
};

export default About;
