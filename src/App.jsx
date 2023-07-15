import About from "./komponen/About"
import Navbar from "./komponen/Navbar"
import Portofolio from "./komponen/Portofolio"
// import SocialLinks from "./komponen/Social"
import { Outlet } from 'react-router-dom'
import Social from "./komponen/Social"
// import './index.css'


function App() {
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Social/>
      {/* <Portofolio/>
      <About/> */}
    </div>
    )
    
  
}

export default App
