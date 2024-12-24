import React from 'react'

const About = () => {
  return (
    <div name='about' className='pt-20 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className='text-4xl font-bold text-justify inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl text-justify mt-10 md:text-2xl'>
            Hello! I'm Avishek Basyal, a Computer Engineering student at Western Regional Campus, aspiring to become an AI/ML Developer. My passion lies in developing innovative solutions through technology, leveraging my skills in Python, C, C++, HTML, CSS, JavaScript, and React to create dynamic and efficient applications.
            </p>
            <br/>
            <p className='text-xl text-justify md:text-2xl'>
            Outside of coding, I enjoy playing cricket, playing badminton, and watching movies, which help me unwind and stay active. I also love traveling, seeking adventures, and visiting cultural sites, as these experiences allow me to connect with diverse traditions and histories while fueling my creativity.
            </p>
            <br/>
            <p className='text-xl text-justify md:text-2xl'>
            I am eager to deepen my knowledge of artificial intelligence and machine learning as I work toward becoming a skilled AI/ML Developer. Learning and mastering these technologies is my primary goal, and I’m excited about the opportunities they present to solve real-world challenges.
            </p>
        </div>
    </div>
  )
}

export default About