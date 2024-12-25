import React from "react";
import weather from "../assets/portfolio/reactWeather.jpg";
import tribute from "../assets/portfolio/tribute.png";
import developer from "../assets/portfolio/developer.png";
import parallax from "../assets/portfolio/parallax.png";
import form from "../assets/portfolio/form.png";
import grocify from "../assets/portfolio/grocify.png";
import newsapp from "../assets/portfolio/newsapp.png";
import fb from "../assets/portfolio/fb.png";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: weather,
      links: "https://github.com/Anonymous-2003/Weather-app",
    },
    {
      id: 2,
      src: tribute,
      links: "https://github.com/Anonymous-2003/Tribute-page-project",
    },
    {
      id: 3,
      src: developer,
      links: "https://github.com/Anonymous-2003/Developer-Landing-Page",
    },
    {
      id: 4,
      src: parallax,
      links: "https://github.com/Anonymous-2003/Parallax-Website",
    },
    {
      id: 5,
      src: form,
      links: "https://github.com/Anonymous-2003/form-control-project",
    },
    {
      id: 6,
      src: grocify,
      links: "https://github.com/Anonymous-2003/Tailwind-project-grocify",
    },
    {
      id: 7,
      src: newsapp,
      links: "https://github.com/Anonymous-2003/News-App",
    },
    {
      id: 8,
      src: fb,
      links: "https://github.com/Anonymous-2003/tailwind-facebook-clone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="px-6 sm:px-8 lg:px-0 pt-20 bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work righ here</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-12 shadow-gray-600 ">
          {portfolio.map(({ id, src, links, title }) => (
            <div
              key={id}
              className="h-full w-full shadow-md rounded-lg group border border-white/20"
            >
              {/* Image Section */}
              <div className="h-40 w-full overflow-hidden rounded-t-lg  shadow-gray-600">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 duration-200"
                />
              </div>

              {/* Button Section */}
              <div className="group flex items-center justify-center h-16 bg-gray-700 rounded-b-lg group">
                <a href={links} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2">
                    <FaGithub color="white" size={24} />
                    <span>Github</span>
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

export default Portfolio;
