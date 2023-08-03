import { useRef } from "react"
import {RiArrowUpDoubleFill} from "react-icons"


export default function ButtonScroll(){
    const ref = useRef(null)

    const upClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
      }
    return(
        <button className="hidden sm:flex flex-col bottom-0 right-1 fixed" onClick={upClick}><RiArrowUpDoubleFill/></button>
    )

}