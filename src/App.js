
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,darkmode]=useState('light');
  const[alert,Setalert]=useState(null);
  const Showalert=(type,massage)=>{
    Setalert({
      type:type,
      massage:massage
    })
    setTimeout(()=>{
      Setalert(null);
    },1500)

  }
  const tooglemode=()=>{
    if(mode==='light'){
    darkmode('dark')
    document.body.style.background='#18186f'
    Showalert('success','Dark mode enable')
    }
    else{
    darkmode('light')
    document.body.style.background='white'
    Showalert('success','Light mode enable')

    }
  }
  return (
    <>
    <Router>
    <Navbar title='Textutils' text='About Text' mode={mode} setmode={tooglemode}/>
    <Alert alert={alert} />
    <div className="container">
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Textform heading="Enter the text to Analyze" mode={mode} Showalert={Showalert}/> }/>
    </Routes>
    </div>
    </Router>
    </>
    
  );
}

export default App;

