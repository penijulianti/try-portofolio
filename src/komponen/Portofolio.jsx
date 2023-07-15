import "../index.css"

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
    return(
        <div  className="h-screen w-full bg-gradient-to-b from-gray-800 to-black left-6">
            <div className="  text-pink-400 ">
                <div className="fixed top-[15%] left-[25%]" >
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
                                        <button className="text-pink-50 w-fit px-6 py-3 my-2 flex
                        items-center rounded-md bg-gradient-to-r from-pink-200 to-pink-500 cursor-pointer">Check it out!</button>
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