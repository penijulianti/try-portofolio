import { useContext } from "react"
import { LangContext, TemaContext, bahasa } from "../App"

export default function Tema() {
    const {tema,setTema} = useContext(TemaContext);
    const {lang} = useContext(LangContext)


    return(
        <button onClick={() => setTema (tema=== "light" ? "dark"  : "light")}>{bahasa[lang].ub}</button>
    )
}