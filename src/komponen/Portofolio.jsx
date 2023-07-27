import { useContext } from "react"
import "../index.css"
import { TemaContext } from "../App"

export default function Portofolio(){
    const project=[
        {
            id:1 ,
            title: "Deposito ",
            foto:"/Logo-C.png",
            desc: "Project Sederhana untuk membantu Bank mengelola Deposito Nasabah mereka",
            link: "https://www.linkedin.com/in/peni-julianti-a994b7220/",
        },
        {
            id: 2,
            title: "JLearn",
            foto: "/banner.jpg",
            desc: "Platform sederhana untuk belajar Bahasa Jepang",
            link: "https://github.com/penijulianti",
        }
    ]
    const {tema} = useContext(TemaContext)
    return(
<div  className={tema === "light" ? "bg-gradient-to-r from-pink-400 to-pink-700 text-black" : "bg-gradient-to-b from-gray-800 to-black text-pink-400"}>
        <div  className="h-screen w-full left-6">
                <div className="relative top-[15%] left-[25%]" >
                    <h1 className="font-extrabold text-6xl">Portofolio</h1>
                    <p>Check some of my work right here</p>
               

                <div id="wrapper" className="">
                        {project.map(({id, title,foto,desc, link}) =>(
                            <div key={id} id="card">
                                <img src={foto} alt="Gagal" />
                                <h1>{title}</h1>
                                <div id= "descriptions">
                                    <h2>{desc}</h2>
                                    <a href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                    <div className={tema === "light" ? "bg-gradient-to-r from-pink-400 to-pink-700 text-black rounded-md" : "bg-gradient-to-b from-gray-800 to-black text-pink-400 rounded-md"}>
                                    <button className=" w-fit px-4 py-3 my-2 flex
                                    items-center  cursor-pointer">Check it out!</button>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>
                </div>
        </div>
        </div>
    )
}