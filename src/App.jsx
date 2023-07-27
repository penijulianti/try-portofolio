import Navbar from "./komponen/Navbar"
import { Outlet } from 'react-router-dom'
import Social from "./komponen/Social"
import { createContext, useState } from "react"

export const TemaContext = createContext({
  tema: null,
  setTema: () => {},
})


function App() {
  const [tema,setTema] = useState("dark");

  return(
    <TemaContext.Provider value={{tema,setTema}}>
      <Navbar/>
    <div className={tema === "light" ? "bg-gradient-to-r from-pink-400 to-pink-700" : "bg-gradient-to-b from-gray-800 to-black text-pink-400"}>
      <Outlet/>
      <Social/>
    </div>
    </TemaContext.Provider>
    )
}

export default App
