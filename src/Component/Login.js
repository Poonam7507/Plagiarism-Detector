import React from 'react'
import { Navbar } from './Navbar'
import '../CSS/Stylecss.css'
import img1 from '../Assets/login.png'
import eye from '../Assets/Vector.png'
import google from '../Assets/Group 12 (1).png';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'


export default function () {
    const navigate=useNavigate();

  return (
    <>
    {/* <Navbar/> */}
        <div className='loginpage'>
            <div className='form'>
            <h1>Login Now</h1>
            <h3>Welcome Again to the Checker</h3>
           <p> User Name </p><input type='text' required></input>
            
            <p id='password'>Password
            {/* <img src={eye} id='eye'/> */}
            </p>
            <input type='text' required  ></input>
            <p><input type='checkbox'></input>I agree to the Terms & Privacy</p>
            <button className='signbtn' onClick={()=>navigate('/home')} >Login</button>
            <p> ------------------Or login using ------------------</p>
           <button className='btn' onClick={()=>navigate('/home')}>

           <img src={google}/>
           </button> 
         
            </div>
            <div className='form' id='img'>
                <img src={img1}/>
            </div>
        </div>
    </>
  )
}
