import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Headder from './Headder'

export const Template = () => {

  const[menuopen , setmenuopen] = useState(false)
  return (
    <>
    <Headder menuopen={menuopen} setmenuopen={setmenuopen}/>


      <nav className={`nav-bar ${menuopen ? 'open' : ""}`}>
        <Link to="/">All</Link>
        <Link to="/fullstackdeveloper">Full Stack Developer</Link>
        <Link to="/datascince">Data Science</Link>
        <Link to="/cybersecurity">Cyber Security</Link>
        <Link to="/ai">Ai</Link>
      </nav>

      <Outlet />
    </>
  )
}
export default Template
