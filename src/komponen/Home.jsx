import {BsArrowRightCircleFill} from "react-icons/bs"
import peni from "../assets/peni.jpg"
import { NavLink } from "react-router-dom"


export default function Home() {
    return(
        <>
        <div name="home" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black'>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center
            justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-2xl sm:text-5xl font-bold text text-pink-500">Hello, I am  a Junior Development Peni Julianti</h2>
                    <p className="text-pink-500 py-4 max-w-md">
                        I will be learn to Development
                    </p>


                    
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
        
        </>
    )
    
}