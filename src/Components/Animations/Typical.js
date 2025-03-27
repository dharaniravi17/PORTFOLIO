import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Type = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: 400,
        height: 100,
        display: 'flex',
        alignContent: 'center',
        marginLeft: 690,
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
        Let's Chat!!
      </h1>
      <div style={{ position: 'absolute' }}>
        <h1 style={{ color: 'rgb(76, 150, 203)', fontSize: 50,marginTop:50 }}>
          <Typewriter
            words={["Let's Chat!!"]}
            loop={2}
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

export default Type;
