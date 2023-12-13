import React from 'react'
import '../CSS/Stylecss.css'

import icon6 from '../Assets/search.png'
import { Navbar } from './Navbar'

export default function About() {
  return (
    <>
    <Navbar/>
    <div id='about'>

   
       <div className='working' >
   <div className='info1'>

    <h1>How It <span>Detects ?</span> </h1>
   </div>
   <div className='info2' >
  <h3> Details are below on how detector detects the plagiarism.</h3>
  <p>With the help of our plagiarism detector, you can check if your content that you are just seconds away from publishing and considering its uniqueness. If you are web owner, then it is very important to have a plagiarism-free content on your website if you wish to attract maximum traffic.</p>
  <p>Built with thorough research on the needs of our customers, all the essential strategies and techniques have been implemented to make results 100% accurate and authentic for everyone.</p>
   </div>
   </div>
   <div className='working'>
  
   <div className='info2' >
  <h3> Importance of plagiarism Detector</h3>
  <p>Plagiarized or duplicated content can lead to lower page rank. If you are caught up in a situation where your article, blog or content is not entirely unique, then there is a comparatively higher risk of getting blacklisted by search engines especially Google.Plagiarized or duplicated content can lead to lower page rank. If you are caught up in a situation where your article, blog or content is not entirely unique, then there is a comparatively higher risk of getting blacklisted by search engines especially Google.</p>
  <p>You can utilize the free plagiarism detection service offered by our similarity checker to check the content from your own website to make sure that no one has stolen the content from your website.</p>
   </div>
   <div className='info1'>

<h1>Its <span>Importance ?</span> </h1>
</div>
   </div>

   <div className='about'>
    <h1><span><img src={icon6} alt='c'/> </span>Here more <span>About Us</span></h1>
    <h3>We are the global plagiarism detection service providers, with users from all across the globe. Our plagiarism checker tool is primarily focused on providing text-related services specifically related to plagiarism check and similarity detection. It is free online plagiarism checker benefiting people from all walks of life.</h3>
   <p>Copyright © 2023. All Rights Reserved</p>
   </div>
   </div>
    </>
  )
}
