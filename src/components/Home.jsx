import React from 'react'
import hero from '../assets/heroImage.JPG';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name ='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto gap-x-20 flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a full Stack Developer and AI/ML enthusiast.
                </h2>
                <p className='text-gray-400 py-4 max-w-md text-xl'>
                Hello, I’m Avishek Basyal, a passionate Computer Engineering student at Western Regional Campus. I specialize in web development with skills in Python, C, C++, HTML, CSS, JavaScript, and React. My goal is to become a skilled AI/ML Developer and work on innovative projects that make a real-world impact.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>Portfolio <span className='group-hover:rotate-90 duration-300 px-2'><MdOutlineKeyboardArrowRight size = {25}/></span></button>
                </div>
            </div>
            <div>
                <img src={hero} alt="My Profile" className=' rounded-2xl mx-auto w-2/3 md:w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home