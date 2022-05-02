import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') // dark mode enable or not 
  const toggleMode = (cls) => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a3852';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      {/* <Router> */}
        {/* <Navbar /> */}
        <Navbar title="TextUtiles" aboutText='About Us' mode={mode} toggleMode={toggleMode} />
        <div className="container">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About mode={mode}/>
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm heading="Try TextUtils - Word Counter, Character Counter" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
