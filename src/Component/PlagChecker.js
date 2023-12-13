import React from 'react'
import '../CSS/Stylecss.css'
import Typewriter from 'typewriter-effect';



export default function PlagChecker() {
  return (
    <>
    <div className='plagchecker' id='home'>
   <h1> Plagiarism Checker</h1>
    <Typewriter
  options={{
    strings: ['  A completely free and accurate online plagiarism detector.Simply copy and paste to detect copied content. '],
    autoStart: true,
    loop: true,
    
    deleteSpeed:30,
    delay:40,
    
  }}
/>
   <h3>
   {/* A completely free and accurate online plagiarism detector.
Simply copy and paste to detect copied content. */}
   </h3>
   <a href='#code'><button className='startbtn'>Let's Start</button></a>
   </div>
  
  

    </>
  )
}
