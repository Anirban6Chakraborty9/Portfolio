import React from 'react'
import HeroImage from "../assets/heroimage2.png";
import { MdOutlineKeyboardArrowRight, MdDownload,  } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[3rem]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mt-32 md:mt-5">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Front-End Developer</span>
            
          </h2>
          <p className="text-gray-500 py-4 max-w-md font-semibold">
          Designing imagination into visually appealing and engaging websites that capture the user's attention and encourage them to explore further.
            Currently, I love to work on web application using technologies like
            React & Tailwind.
          </p>

          <div className='flex gap-3 items-center'>
            <Link
              to='contact' smooth duration={800}
              className="group text-white w-fit px-2 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-md hover:shadow-slate-400 "
            >
              Reach out
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a href="https://drive.google.com/file/d/1paoKhZoVQH1aRnVieGjT68pSd5TIsGv1/view?usp=sharing"
            target='_blank'>
              <button className='lg:hidden group text-white w-fit px-2 py-3 my-2 flex items-center rounded-md  bg-purple-500 cursor-pointer hover:shadow-md hover:shadow-slate-400 '>Resume
                <span className="group-hover:inset-40 duration-300">
                    <MdDownload size={25} className="ml-1" />
                  </span>
              </button>
            </a>
            <a href="https://linktr.ee/anirbanchakraborty75" target='_blank'>
              <button className='lg:hidden group text-white w-fit px-2 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 cursor-pointer hover:shadow-md hover:shadow-slate-400 '>Social
                <span className="group-hover:inset-40 duration-300">
                    <IoShareSocial  size={25} className="ml-1" />
                  </span>
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-blue-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
