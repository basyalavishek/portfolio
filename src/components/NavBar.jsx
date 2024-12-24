import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const [nav,setNav] = useState(false);

    const links = [
        {
            id:1,
            link:'home'
        },
         {
            id:2,
            link:'about'
        },
         {
            id:3,
            link:'portfolio'
        },
         {
            id:4,
            link:'experience'
        },
         {
            id:5,
            link:'contact'
        }
        
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
    <div>
      <h1 className="text-5xl font-signature ml-2 ">Avishek</h1>
    </div>
    <ul className="hidden md:flex">

        {links.map(({ id, link}) =>(
            <li key = {id} className="px-4 cursor-pointer capitalize font-large text-gray-500 hover:scale-105 duration-200">{link}</li>    
    ))}

    </ul>
    <div onClick={()=>setNav(!nav)} className='pr-4 cursor-pointer color z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/> }
        
    </div>

    {
        // if nav is true then only show this
        nav && (
            <ul className='flex flex-col justify-center items-center py-6 top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-gray-500 absolute'>
            {/*This gradient will go from top to bottom
            color at top will be black and then it goes to grey at end
            */}


    {links.map(({ id, link}) =>(
            <li key = {id} className="cursor-pointer text-4xl px-4 py-6 capitalize text-gray-500 hover:scale-105 duration-200">{link}</li>    
    ))}
    </ul>
        )
    }

    

   </div>
  )
}

export default NavBar