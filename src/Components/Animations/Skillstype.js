import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Skillstype = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: 300,
        height: 100,
        display: 'flex',
        alignContent: 'center',
        marginLeft: 720,
      }}
    >
      <h1
        style={{
          color: 'gray',
          position: 'relative',
          marginTop: 50,
          fontSize: 50,
        }}
      >
        My Skills
      </h1>
      <div style={{ position: 'absolute' }}>
        <h1 style={{ color: 'rgb(49, 96, 134)', fontSize: 50,marginTop:50 }}>
          <Typewriter
            words={['My Skills']}
            loop={4}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
    </div>
  );
};

export default Skillstype;
