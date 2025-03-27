import React from 'react';
import { motion } from 'framer-motion';

const Square3 = () => {
  return (
    <div>
      <motion.div 
        style={{
          width: 150, height: 50,
          backgroundColor: 'rgb(44, 169, 240)',
          alignContent: 'center',
          borderRadius: 40, justifyContent: 'center',
          cursor: 'pointer', marginLeft: 400, display: 'flex'
        }}
      >
        <a 
          style={{
            margin: 19, textDecoration: 'none', color: "black"
          }} 
          href="/dharani resume.pdf" // Use relative path
          download="DHARANI-RESUME.pdf" // Ensures file downloads as PDF
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
}

export default Square3;
