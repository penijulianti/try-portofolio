/* eslint-disable react-refresh/only-export-components */
import Navbar from "./komponen/Navbar"
import { Outlet } from 'react-router-dom'
import Social from "./komponen/Social"
import { createContext, useEffect, useRef, useState } from "react"
import Headline from './komponen/Headline'
import {RiArrowUpDoubleFill} from "react-icons/ri"



export const TemaContext = createContext({
  tema: null,
  setTema: () => {},
})

export const LangContext = createContext({
  lang: null,
  setLang: () => {},
})

export const bahasa = 
  {
    id:{
      home:"Beranda",
      port:"Portofolio",
      ab:"Tentang",
      ub:"Ubah Tema",
      hai:"Halo, saya Junior Development Peni Julianti",
      stu:"Saya sedang belajar menjadi Development yang mahir"
    },
     en:{
      home:"Home",
      port:"Portofolio",
      ab:"About",
      ub:"Change Theme  ",
      hai:"Hello, I am  a Junior Development Peni Julianti",
      stu:"I'm studying for Advanced Development"
    }
  }

function App() {
  const [tema,setTema] = useState("dark");
  const [lang,setLang] = useState("en")
  const ref = useRef(null)

  const upClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(()=> {
    console.log(
      `Tema berhasil Diubah keMode ${tema}`
    )
  },[tema])

  return(
    <LangContext.Provider value={{lang,setLang}}>
    <TemaContext.Provider value={{tema,setTema}}>
      <Navbar/>
    <div className={tema === "light" ? "bg-gradient-to-r from-pink-400 to-pink-700" : "bg-gradient-to-b from-gray-800 to-black text-pink-400"}>
    <Headline ref={ref} text={"Hello, world!"}/>
      <Outlet/>
      <Social/>
      <button className="hidden sm:flex flex-col bottom-4 right-1 fixed  rounded-xl" onClick={upClick}><RiArrowUpDoubleFill/></button>
    </div>
    </TemaContext.Provider>
    </LangContext.Provider>
    )
}

export default App
