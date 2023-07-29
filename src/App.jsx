/* eslint-disable react-refresh/only-export-components */
import Navbar from "./komponen/Navbar"
import { Outlet } from 'react-router-dom'
import Social from "./komponen/Social"
import { createContext, useState } from "react"

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
      ub:"Ubah Warna",
      hai:"Halo, saya Junior Development Peni Julianti",
      stu:"Saya sedang belajar menjadi Development yang mahir"
    },
     en:{
      home:"Home",
      port:"Portofolio",
      ab:"About",
      ub:"Change Color",
      hai:"Hello, I am  a Junior Development Peni Julianti",
      stu:"I'm studying for Advanced Development"
    }
  }

function App() {
  const [tema,setTema] = useState("dark");
  const [lang,setLang] = useState("en")

  return(
    <LangContext.Provider value={{lang,setLang}}>
    <TemaContext.Provider value={{tema,setTema}}>
      <Navbar/>
    <div className={tema === "light" ? "bg-gradient-to-r from-pink-400 to-pink-700" : "bg-gradient-to-b from-gray-800 to-black text-pink-400"}>s
      <Outlet/>
      <Social/>
    </div>
    </TemaContext.Provider>
    </LangContext.Provider>
    )
}

export default App
