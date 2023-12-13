import React from 'react'
import '../CSS/Stylecss.css'
import { Navbar } from './Navbar'

export default function Detector() {
  return (
    <>
    
      <div className='checker' id='code'>
   <div className='count'>

   <h2>Total Word(s) : 0/1000</h2> 
   <h2>Total Char : 0 </h2>
   </div>
    <div className='check'>

    <div className='text'>
    <textarea placeholder='Enter Text Here'></textarea>
    </div>
    <div className='text'>
    <textarea placeholder='Enter Source Code Here'></textarea>


    </div>
    </div>
    <div className='url'>
    <input type='text' placeholder='Enter Url For Checking Plagiarism'></input>
    </div>
    <div className='checkerbtn'>
        <button className='btn'>Check Plagiarism</button>
        <button className='btn' id='AIbtn'>Check AI Content</button>
    </div>
   </div>
   <p>Copyright © 2023. All Rights Reserved</p>

    </>
  )
}
