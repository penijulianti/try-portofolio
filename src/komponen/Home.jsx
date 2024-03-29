import {BsArrowRightCircleFill} from "react-icons/bs"
import peni from "../assets/peni.jpg"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { LangContext, TemaContext, bahasa } from "../App"


export default function Home() {
    const {tema} = useContext(TemaContext)
    const {lang}= useContext(LangContext)
    return(
        <>
    <div  className={tema === "light" ? "bg-gradient-to-r from-pink-300 to-pink-500 text-gray-800" : "bg-gradient-to-b from-gray-800 to-black text-pink-500"}>
        <div name="home" className='h-screen w-full '>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center
            justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-2xl sm:text-5xl font-bold text">{bahasa[lang].hai}</h2>
                    <p className="py-4 max-w-md">{bahasa[lang].stu}</p>

                    <div>
                        <NavLink to='/port'
                                      smooth
                                      duration={500}
                        >
                        
                        <button className="group text-pink-1000 w-fit px-6 py-3 my-2 flex
                        items-center rounded-md bg-gradient-to-r from-pink-400 to-pink-700 cursor-pointer">
                            Portofolio 
                            <span className="group-hover:rotate-90 duration-100"><BsArrowRightCircleFill size={12}
                            className="ml-1"/></span>
                        </button>
                        </NavLink>
                    </div>
                </div>

                <div>
                    <img src={peni} alt="my photo" className="rounded-2xl mx-auto w-1/4 md:w-80"/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
    
}