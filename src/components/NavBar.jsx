import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll";
const NavBar = () => {

    const [nav,setNav] =  useState(false);

    const links = [
        {
            id:1,
            link: "home"
        },
        {
            id:2,
            link: "about"
        },
        {
            id:3,
            link: "project"
        },
        {
            id:4,
            link: "skills"
        },
        {
            id:5,
            link: "contact"
        },
    ]

  return (
    <div className='flex justify-between items-center bg-black w-full h-20 fixed text-white px-4'>
      <div>
        <h1 className='text-4xl font-signature ml-2'>Anirban</h1>
      </div>

      <ul className='hidden md:flex bg-transparent'>

        {links.map(({id,link}) => (
            <li key={id} className='capitalize px-4 font-medium text-gray-400  cursor-pointer bg-transparent group'>
              <Link to={link} smooth duration={800}>
                {link}
              </Link>
              <div class="bg-amber-500 h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
        ))}

      </ul>

      <div 
      onClick={() => setNav(!nav)} 
      className='cursor-pointer px-3 text-gray-300 z-10 md:hidden'>

        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            
      </div>

      {nav && 
        <ul 
        className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-700 text-gray-300">
            {links.map(({id,link}) => (
                <li key={id} className='capitalize px-4 cursor-pointer py-6 text-4xl'>
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}>
                    {link}
                  </Link>
                </li>
            ))}
        </ul>
      }

    </div>
  )
}

export default NavBar;
