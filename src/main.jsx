import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './komponen/Home.jsx'
import Portofolio from './komponen/Portofolio.jsx'
import SocialLinks from './komponen/Social.jsx'
import About from './komponen/About.jsx'


const alamat = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/port",
        element:<Portofolio/>
      },
      {
        path:"/social",
        element:<SocialLinks/>
      },
      {
        path:"/about",
        element:<About/>
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={alamat} />
  </React.StrictMode>
);
