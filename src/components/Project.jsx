import React from "react";
import weather from "../assets/portfolio/weather.png";
import currency from "../assets/portfolio/currency.png";
import password from "../assets/portfolio/password.png";
import calculator from "../assets/portfolio/calculator.png";
import countdown from "../assets/portfolio/countdown.png";
import guess from "../assets/portfolio/guess.png";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: weather,
      title: "Weather App",
      demo: 'https://anirban6chakraborty9.github.io/Weather-App/',
      code: 'https://github.com/Anirban6Chakraborty9/Weather-App'
    },
    {
      id: 2,
      src: currency,
      title: "Currency Converter",
      demo: 'https://anirban6chakraborty9.github.io/Currency-Converter/',
      code: 'https://github.com/Anirban6Chakraborty9/Currency-Converter'
    },
    {
      id: 3,
      src: password,
      title: "Password Generator",
      demo: 'https://anirban6chakraborty9.github.io/Random-Password-Generator/',
      code: 'https://github.com/Anirban6Chakraborty9/Random-Password-Generator'
    },
    {
      id: 4,
      src: countdown,
      title: "CountDown Timer",
      demo: 'https://anirban6chakraborty9.github.io/CountDown-Timer/',
      code: 'https://github.com/Anirban6Chakraborty9/CountDown-Timer'
    },
    {
      id: 5,
      src: guess,
      title: "Guess The Number Game",
      demo: 'https://anirban6chakraborty9.github.io/Guess-the-Number-Game/',
      code: 'https://github.com/Anirban6Chakraborty9/Guess-the-Number-Game'
    },
    {
      id: 6,
      src: calculator,
      title: "Calculator",
      demo: 'https://anirban6chakraborty9.github.io/Calculator_using_HTML-CSS-JS/',
      code: 'https://github.com/Anirban6Chakraborty9/Calculator_using_HTML-CSS-JS'
    }
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full md:pt-28 min-[320px]:pt-[38rem] "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10 pb-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,title,demo,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-center pt-5 text-stone-400 font-semibold">{title}</p>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank">
                  <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank">
                  <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
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

export default Project;