import React from 'react'
import { Navbar } from './Navbar'
import PlagChecker from './PlagChecker'
import Detector from './Detector';
import Features from './Features';
import About from './About';
import Report from './Report';
export default function Home() {
  return (
    <>
   <Navbar/>
   <PlagChecker/>
   <Detector/>
   {/* <Features/> */}
   {/* <About/> */}
   {/* <Report/> */}
 
    </>
  )
}
