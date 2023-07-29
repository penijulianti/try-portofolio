import { useContext } from "react"
import { LangContext, TemaContext, bahasa } from "../App"


export default function About(){
  const {tema} = useContext(TemaContext)
  const {lang} = useContext(LangContext)
    return(
      <div  className={tema === "light" ? "bg-gradient-to-r from-pink-400 to-pink-700 text-gray-800" : "bg-gradient-to-b from-gray-800 to-black text-pink-500"}>
        <div
        name="about"
        className="w-full h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-800">{bahasa[lang].ab}</p>
          </div>
  
          <p className="text-xl mt-20">
            Hal yang pernah saya pelajari dalam dunia coding ialah
            C, Java, HTML dan CSS, dan sekarang sedang dalam
            pembelajaran React.
          </p>
  
          <br />
        </div>
      </div>
      </div>
    )
    
}