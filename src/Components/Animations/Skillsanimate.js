import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Skillsanimate = () => {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '9px',
        marginLeft: 204,
        width: 400,
        height: 150,
        position: 'absolute',
      }}
    >
      <h1>I'm a</h1>
      <div>
        <h1 style={{ color: 'rgb(44, 169, 240)' }}>
          <Typewriter
            words={['Frontend Developer', 'Designer']}
            loop={1}
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

export default Skillsanimate;
