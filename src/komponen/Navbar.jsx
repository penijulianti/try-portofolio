import { useContext, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
import { LangContext, TemaContext, bahasa } from "../App";
import Tema from "./Tema";




export default function Navbar(){
    const [nav, setNav] = useState(false);
    const {tema} = useContext(TemaContext)
    const {lang,setLang} =useContext(LangContext)
    return(
        <>
        {/* <div className=>ndksndksn */}
        <div className={tema === "light" ? "bg-pink-500 text-gray-800 flex justify-between items-center w-full h-20 px-4  fixed"  : "text-pink-500 bg-gray-800 flex justify-between items-center w-full h-20 px-4  fixed"}>
          <div className="text-5xl font-signature ml-2">
            <Link to="/">
              <h1>Julian</h1>
            </Link>
            </div>
    

            <ul className="hidden md:flex">
            <NavLink to="/" className="px-4 cursor-pointer capitalize font-medium
                hover:scale-105 duration-200">{bahasa[lang].home}</NavLink>
            <NavLink to="/port" className="px-4 cursor-pointer capitalize font-medium
                hover:scale-105 duration-200">{bahasa[lang].port}</NavLink>
            <NavLink to="/about" className="px-4 cursor-pointer capitalize font-medium
                hover:scale-105 duration-200">{bahasa[lang].ab}</NavLink>
                <Tema/>
                <button className="ml-4" onClick={() => setLang("en")}>English</button>
                <button className="ml-4"onClick={() => setLang("id")}>Indonesia</button>

            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
                {nav?<FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
        {/* </div> */}
            {nav && (
                <ul className={tema === "light" ? "bg-pink-500 text-gray-800 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen "  
                : "text-pink-500 bg-gray-800 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen "}>
                  <NavLink to="/" className="px-4 cursor-pointer capitalize py-6 
                  text-4xl hover:scale-105 duration-200">Home</NavLink>
                  <NavLink to="/port" className="px-4 cursor-pointer capitalize py-6 
                  text-4xl hover:scale-105 duration-200">Portofolio</NavLink>
                  <NavLink to="/about" className="px-4 cursor-pointer capitalize py-6 
                  text-4xl  hover:scale-105 duration-200">About</NavLink>
                  <Tema/>
            </ul>
            )}
        </div>
    </>
    
    )
}