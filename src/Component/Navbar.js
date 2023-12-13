import React from 'react';
import { useState } from 'react';
import '../CSS/Stylenav.css';
import logo from '../Assets/search.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar=()=> {
    const navigate=useNavigate();
//   const [nav, setNav] = useState(false)
// const stylenav=()=>{
//  setNav(!nav);
// }
  return (
    <>
 <div className="nav" > 
            <ul>
           
            {/* <div id="title1">
                
            <img src={logo} alt='b'/>
            </div> */}  
            
            <div id='title2'>
            {/* <i className="fa fa-bars" onClick={stylenav} style={{color:"white"}}></i> */}
            <div  id='navbox'>
            
             <div className='leftnav'>
                <li id='logo' >
            <p  onClick={()=>navigate('/home')}>
               
           <img src={logo} alt='b'/>
                    <span>Plag</span>Detector
              
                    </p>
                    </li>
            
          
                                             <li className='ele'>
                         
                                        <h3 id='activ'  onClick={()=>navigate('/features')} > 
                                       
                    
                                  Features
                                        
                                   </h3>
                                       </li>
                                             <li className='ele'>
                         
                                        <h3  onClick={()=>navigate('/about')}> 
                                      
                    
                                  About
                                       
                                   </h3>
                                       </li>
                                             <li className='ele'>
                         
                                        <h3 onClick={()=>navigate('/report')}> 
                                     
                 

                                  Report
                  
                                    
                                   </h3>
                                       </li>
                                       <li>

<input type="text" placeholder="Search.." className='searchbox'></input>
</li>   
</div>
               <div className='rightnav'>                    
              <li   onClick={()=>navigate('/signup')}>
                         
                      <button className='loginbtn'>Login</button>  
                  
                      
                        </li>
                        <li  onClick={()=>navigate('/help')}>
                         
                       
                        <button className='helpbtn'>Help</button>
                         
                        </li>
                        
                    </div>
            </div>
                       </div>
                     
             
            
             
            </ul> 

          </div>
    </>
  )
}
