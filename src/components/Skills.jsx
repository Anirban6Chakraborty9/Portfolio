import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.webp";

import github from "../assets/github.png";
import git from "../assets/Git.png";
import jupyter from "../assets/Jupyter.png";
import chatgpt from "../assets/chatgpt.png";

import python from "../assets/Python.png";
import java from "../assets/Java.png";
import c from "../assets/C.png";

import numpy from "../assets/NumPy.png";
import mtplib from "../assets/Matplotlib.png";
import sktln from "../assets/scikitlearn.png"
import pandas from "../assets/Pandas.png"
import tensorflow from "../assets/tensorflow.png"

import mysql from "../assets/MySQL.png";
import mongo from "../assets/MongoDB.png";

const Skills = () => {
  const web = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
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
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    }
  ];

  const tool = [
    {
      id: 1,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 2,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 3,
      src: jupyter,
      title: "Jupyter Notebook",
      style: "shadow-orange-400",
    },
    {
      id: 4,
      src: chatgpt,
      title: "ChatGPT",
      style: "shadow-green-400",
    }
  ]

  const code = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 2,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 3,
      src: c,
      title: "C",
      style: "shadow-blue-400",
    }
  ]

  const lib = [
    {
      id: 1,
      src: numpy,
      title: "Numpy",
      style: "shadow-blue-400",
    },
    {
      id: 2,
      src: mtplib,
      title: "MatPlotLib",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: sktln,
      title: "Scikit Learn",
      style: "shadow-cyan-400",
    },
    {
      id: 4,
      src: pandas,
      title: "Pandas",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: tensorflow,
      title: "Tensorflow",
      style: "shadow-orange-400",
    }
  ]

  const dbms = [
    {
      id: 1,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-400",
    },{
      id: 2,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    }
  ]

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full  md:pt-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-8">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="pt-10 font-semibold">Web Development Technologies</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {web.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="pt-10 font-semibold">Coding</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {code.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="pt-10 font-semibold">Machine Learning Libraries</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {lib.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="pt-10 font-semibold">Database Management</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {dbms.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="pt-10 font-semibold">Tools</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tool.map(({ id, src, title, style }) => (
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

export default Skills;