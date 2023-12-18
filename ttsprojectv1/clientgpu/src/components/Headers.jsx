import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from "./logo.png"


function Headers() {
  const navigate= useNavigate()
  function handleLogout(){
    console.log("Logout clicked")
  }
  // function handleContact(){
  //   navigate("https://blackbasiltech.com/contact-us/",{replace:'true'})
  // }
  return (
    <div className='navbar'>
      <div className="logo-container">
        <img src={logo} className='logo'/>
        <h2>Voice AI</h2>
        <p>(Beta)</p>
      </div>
      <div className="nav-links">
        {/* <Link  onClick={handleContact} >Get in Touch</Link> */}
        <a  href='https://blackbasiltech.com/contact-us/' >Get in Touch</a>
        <Link onClick={handleLogout} to="/">Logout</Link>
      </div>
      
    </div>
  )
}

export default Headers