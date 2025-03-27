import React from 'react';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Skills from './Components/Skills';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';



function App() {
  return (
   <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='/navbar' element={<Navbar />}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
