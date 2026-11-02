import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './componants/Template'
import Headder from './componants/Headder'
import Navbar from './componants/Navbar'
import "./App.css"
import All from './componants/All'
import FullStackDevelopment from './componants/FullStackDevelopment'
import DataScience from './componants/DataScience'
import CyberSecurity from './componants/CyberSecurity'
import AI from './componants/AI'
import Error from './componants/Error'
import { BlogClick } from './componants/BlogClick'
import blogs from './data/blogsData'

export const App = () => {


// const[menuopen , setmenuopen] = useState(false)

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Template />,
     children:[
      {
        path:"/",
        element:<All/>
      },
      {
        path:"/fullstackdeveloper",
        element:<FullStackDevelopment/>
      },
      {
        path:"/datascince",
        element:<DataScience/>
      },
      {
        path:"/cybersecurity",
        element:<CyberSecurity/>
      },
      {
        path:"/ai",
        element:<AI/>
      },
      {
        path:"/*",
        element:<Error/>
      }

     ]
      
    },
    {
      path:"/blog/:id",
      element:<BlogClick/>
    }
  ])
  return (
    <>
     {/* <Headder menuopen ={menuopen} setmenuopen={setmenuopen}/> */}
     {/* <Navbar menuopen ={menuopen}/>  */}
     <RouterProvider router={router}/>
    </>
  )
}
export default App   