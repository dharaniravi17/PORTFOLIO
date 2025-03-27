import React from 'react';
import Typical from 'react-typical';

const Skillsanimate = () => {
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '9px',
      marginLeft:204,
      width:400,
      height:150,
      position:'absolute',
    }}>
      <h1>
        I'm a
      </h1>
      <div style={{}}>
        <h1 style={{
          color:'rgb(44, 169, 240)'
        }} >
          <Typical 
            steps={['',2000,'Frontend Developer', 1000, 'Designer', 1000]} 
            loop={1} 
          />
        </h1>
      </div>
    </div>
  );
}

export default Skillsanimate;
