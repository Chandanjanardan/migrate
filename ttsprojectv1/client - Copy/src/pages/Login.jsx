import React, { useState } from 'react'
import SpeechToText from '../components/SpeechToText'
import Headers from '../components/Headers'
import { useNavigate } from 'react-router-dom'
import Epohhn from "./EPOHHN.png"

function Login() {
  const navigate= useNavigate()
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  // -------------------function -------------------------------
  function handleLogin(){
    if(username=="admin" && password=="admin@123"){
      navigate("/epohhn")
    }else{
      alert("Wrong credentails try again")
    }
  }
  return (
<>
<section className='login-sec'>
{/* <img className='background' src='https://images.pexels.com/photos/1111317/pexels-photo-1111317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/> */}
<img className='background' src={Epohhn}/>

<form className='login'>
        <h1 style={{textAlign:"center"}}>LOGIN</h1>
        <input type='text' 
        value={username}
        placeholder='Username'
        onChange={(e)=>setUsername(e.target.value)}
        
      />
        <input 
        type='password' 
        value={password}
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}
        
        />
        <button onClick={handleLogin} className='login-button'>Submit</button>
      </form>
      {/* <SpeechToText/> */}

        </section>
</> 
 )
}

export default Login