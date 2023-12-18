import {React,useEffect, useState} from 'react'
import Headers from '../components/Headers'
import TextBox from '../components/TextBox'
import Audio from '../components/Audio'
import "./index.css"
import ParticleBackground from "../components/ParticleBackground "

function Index() {
  const [test,setTest]=useState("")
  useEffect(()=>{
    async function getApi() {
      try {
        let response = await fetch("http://35.239.199.30:6006/TTS"
        // let response = await fetch("http://localhost:6009/jstest"
        ,{credentials:"include"})
        let data= await response.json()

        // Handle the response...
        // const data= await response.json()
        console.log(data)
        // setTest(data.msg)
        setTest(data)
        
      } catch (error) {
        // Handle any errors that occurred during the fetch.
        console.error("Error fetching data:", error);
      }
    }
    
    getApi()
  },[])
  return (
    // style={{ position: 'relative', zIndex: 2,transform:"translateY(-38.3rem)
    <>
    {/* <ParticleBackground /> */}
    <div  className="screens">
      <Headers />
      <main className='container'>
        <TextBox />
      </main>
      <Audio />
    </div>
  </>


  )
}

export default Index

// this is index for the main page