import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:pt-40 pb-16 min-[320px]:pt-[57rem] "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mb-10">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Hi !, I'm Anirban Chakraborty, an undergraduate student, pursuing B.Tech in Computer Science and Engineering, with a passion for technology. I am highly motivated to excel in the field of front-end development. With strong communication skills honed through academic projects and extracurricular activities, I effectively convey ideas and collaborate with peers and mentors. My journey as a front-end developer has equipped me with the ability to solve complex problems creatively and efficiently. Whether it's optimizing user interfaces or troubleshooting code, I approach challenges with determination and a keen eye for detail. 
        </p>

        <br />

        <p className="text-xl">
        As a coder, I thrive on continuous learning and innovation, constantly seeking new opportunities to enhance my skills and contribute meaningfully to projects. My undergraduate experience has not only provided me with a solid foundation in computer science but has also instilled in me a drive for excellence and a passion for creating seamless digital experiences. I am eager to leverage my skills and enthusiasm to make impactful contributions in the dynamic world of technology.
        </p>
      </div>
    </div>
  );
};

export default About;