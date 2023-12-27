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
          Hi, there! I am {new Date().getFullYear() - new Date('2004-03-24').getFullYear()} and currently pursuing a degree in Computer Science at the <a href="https://maua.br/">Instituto Mauá de Tecnologia (IMT)</a>, where I am immersed in a dynamic and challenging academic environment. My passion for technology is a driving force in my academic journey, and I constantly seek new ideas to explore and implement. This fervor extends particularly to the realms of cybersecurity and networking, where my enthusiasm for delving into cutting-edge concepts and solutions knows no bounds.
          <br />
          <br />
          Beyond my academic pursuits, I actively contribute to the IMT community by serving as a mentor and class representative, where I take pride in assisting my peers in their educational endeavors. Additionally, I hold the role of Director of Marketing at Mauá Esports, an esteemed student entity within IMT. This multifaceted involvement not only enhances my leadership skills but also allows me to channel my passion for technology and collaborative spirit into meaningful contributions to both academic and extracurricular spheres.
        </p>
      </div>
    </section>
  );
};

export default About;
