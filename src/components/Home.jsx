import React from "react";
import hero from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="flex justify-center items-center px-6 sm:px-8 lg:px-0 min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto gap-x-20 flex flex-col items-center justify-center h-full px-4 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Hello, I&#39;m Avishek Basyal.
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-xl">
            Passionate full Stack Developer and AI/ML enthusiast.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300 px-2">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className=" flex-1 rounded-full md:flex">
          <img
            src={hero}
            alt="My Profile"
            className="rounded-2xl mx-auto w-[300px] h-[300px] object-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
