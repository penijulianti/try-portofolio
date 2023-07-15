import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";




export default function Navbar(){
    const [nav, setNav] = useState(false);

    return(
        <>
        <div className="flex justify-between items-center w-full h-20 px-4 text-pink-500 bg-gray-800 fixed">
          <div className="text-5xl font-signature ml-2">
            <Link to="/">
              <h1>Julian</h1>
            </Link>
            </div>
    

            <ul className="hidden md:flex">
            <NavLink to="/" className="px-4 cursor-pointer capitalize font-medium
                text-pink-500 hover:scale-105 duration-200">Home</NavLink>
            <NavLink to="/port" className="px-4 cursor-pointer capitalize font-medium
                text-pink-500 hover:scale-105 duration-200">Portofolio</NavLink>
            <NavLink to="/about" className="px-4 cursor-pointer capitalize font-medium
                text-pink-500 hover:scale-105 duration-200">About</NavLink>
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-pink-500 md:hidden">
                {nav?<FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
            <ul className="flex flex-col justify-center items-center
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                  <NavLink to="/" className="px-4 cursor-pointer capitalize py-6 
                  text-4xl text-pink-500 hover:scale-105 duration-200">Home</NavLink>
                  <NavLink to="/port" className="px-4 cursor-pointer capitalize py-6 
                  text-4xl text-pink-500 hover:scale-105 duration-200">Portofolio</NavLink>
                  <NavLink to="/about" className="px-4 cursor-pointer capitalize py-6 
                  text-4xl text-pink-500 hover:scale-105 duration-200">About</NavLink>
            </ul>
            )}
        </div>
    </>
    
    )
}