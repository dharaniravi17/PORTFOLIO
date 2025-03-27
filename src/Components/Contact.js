import React from 'react';
import Navbar from './Navbar';
import Typical from './Animations/Typical';
import Whatsapp from './Animations/Whatsapp';
import AbstractLinesBackground from './Animations/RightBackground';


const Contact = () => {
  return (
    <div>
      <div>
        <div>
        <Navbar />
        <AbstractLinesBackground />
        <Typical />
        <Whatsapp/>
        </div>
      </div>
      
    </div>
   
  );
};

export default Contact;
