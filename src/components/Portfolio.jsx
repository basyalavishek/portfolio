import React from 'react'
import weather from '../assets/portfolio/reactWeather.jpg';
import tribute from '../assets/portfolio/tribute.png';
import developer from '../assets/portfolio/developer.png';
import parallax from '../assets/portfolio/parallax.png';
import form from '../assets/portfolio/form.png';
import grocify from '../assets/portfolio/grocify.png';
import newsapp from '../assets/portfolio/newsapp.png';
import fb from '../assets/portfolio/fb.png';

const Portfolio = () => {

    const portfolio = [
        {
            id:1,
            src:weather,
        },
        {
            id:2,
            src:tribute,
        },
        {
            id:3,
            src:developer,
        },
        {
            id:4,
            src:parallax,
        },
        {
            id:5,
            src:form,
        },
        {
            id:6,
            src:grocify,
        },
        {
            id:7,
            src:newsapp,
        },
        {
            id:8,
            src:fb,
        },
        
    ]

  return (
    
        <div name='portfolio' className='pt-20 bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:min-h-screen'> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-xl'>Check out some of my work righ here</p>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-12">
        {
            portfolio.map(({ id, src }) => (
            <div 
                key={id} 
                className="h-full w-full shadow-md shadow-gray-600 rounded-lg group"
            >
                {/* Image Section */}
                <div className="h-64 w-full overflow-hidden rounded-t-lg">
                <img 
                    src={src} 
                    alt="" 
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 duration-200"
                />
                </div>

                {/* Button Section */}
                <div className="group flex items-center justify-center h-16 bg-gray-700 rounded-b-lg">
                <button className="w-1/2 px-6 py-2 group-hover:scale-105 duration-200">
                    Code
                </button>
                </div>
            </div>
            ))
        }
        </div>






                </div>
            </div>
            
        )
        }

        export default Portfolio