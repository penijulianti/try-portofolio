import { forwardRef } from "react"

// eslint-disable-next-line react-refresh/only-export-components
function Headline({text},ref){
    return(
        <h1 ref={ref}>{text}</h1>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(Headline)