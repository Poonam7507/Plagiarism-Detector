import './App.css';
import Home from './Component/Home';
import PlagChecker from './Component/PlagChecker';
import Detector from './Component/Detector';
import Features from './Component/Features';
import Report from './Component/Report';
import {Routes, Route} from 'react-router-dom'
import About from './Component/About';
import Login from './Component/Login';
import Signup from './Component/Signup';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Routes>
      
      <Route  exact path="/home"  element={<Home/>} />
      <Route path="/code" element={<Detector/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/report" element={<Report/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />

</Routes>
      {/* </header> */}
    </div>
  );
}

export default App;
