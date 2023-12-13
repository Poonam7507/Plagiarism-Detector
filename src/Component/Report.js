import React from 'react'
import '../CSS/Stylecss.css'
import dataimg from '../Assets/chart.png'
import { Navbar } from './Navbar'
// import img1 from '../Assets/'

export default function Report() {
  return (
    <>
<Navbar/>

   <h1 className='report' id='report'>Report</h1>
<div className='reportbox' >
    <div className='data'>
<h3> 
<span>We as individuals and businesses interact with a lot of other businesses and service providers online and offline on a daily basis. We buy clothes online, import medicines from different parts of the world, and use remote financial and banking services.</span> In such a scenario, where everything is available at your fingertips except the trust for the other party, how do you validate the authenticity of <span>the clothes that you got online, or how do you know that the medicines you imported</span> are genuine and not some cheap counterfeit or how do you know that your financial and personal data is safe and is not getting misused by some hacker sitting in some part of the world.
 </h3>
 <div className='count'>
        <p>Total word(s): 117/1000</p>
        <p>Total char: 669</p>
    </div>

    </div>
    <div className='code'>
    <img src={dataimg}/>
         <div className='count'>
        <p>75% Plagiarism</p>
        <p>25% Unique</p>
    </div>
    <p>Number of words : 117</p>
    <p>Result found : 1</p>
    <p>URL link : https://medium.com/techskill-brew/what-is-blockchain-technology-part-1-blockchain-basics-e44847198c94 </p>

    </div>

    
</div>
   <p>Copyright © 2023. All Rights Reserved</p>
    </>
  )
}
