import React from 'react'
import icon1 from '../Assets/Mask group.png';
import icon2 from '../Assets/Mask group (1).png';
import icon3 from '../Assets/Mask group (2).png';
import icon4 from '../Assets/Mask group (3).png';
import icon5 from '../Assets/Mask group (4).png';
import '../CSS/Stylecss.css'
import { Navbar } from './Navbar';


export default function Features() {
  return (
    <>
    <Navbar/>
<div className='features' id='features'>
   <h1>Key Features Of <span>Plagiarism Detection Tool</span></h1>
    <h3>Our mission is to fulfill everyone's NEEDS in plagiarism detection. Most user-friendly interface with plenty of exclusive FEATURES to execute efficiency & reliability mission.</h3>
    <div className='box'>
        <div className='feabox'><img src={icon1} alt='x'/> <p>Easy To Use</p></div>
        <div className='feabox'><img src={icon2} alt='x'/><p>Accurate Report</p></div>
        <div className='feabox'><img src={icon3} alt='x'/><p>Source Code Detection</p></div>
        <div className='feabox'><img src={icon4} alt='x'/><p>Text Plag Detection</p></div>
        <div className='feabox'><img src={icon5} alt='x'/><p>AI Content </p></div>
    </div>
   </div>
   <p>Copyright © 2023. All Rights Reserved</p>

    </>
  )
}
