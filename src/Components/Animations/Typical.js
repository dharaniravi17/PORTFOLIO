import { color } from 'framer-motion';
import React from 'react'
import Typical from 'react-typical';

const Type = () => {
  return (
    <div style={{position:'absolute',
    width:300,height:100,display:'flex',alignContent:'center',marginLeft:690}}>
        <h1 style={{color:'gray',position:'relative',marginTop:50,fontSize:50}}>Lets Chat!!</h1>
        <div style={{position:'absolute'}}>
            <h1 style={{color:'rgb(76, 150, 203)',fontSize:50}}>
                <Typical steps={['',500,'Lets Chat!!',1000]}
                loop={2}/></h1>
        </div>
        
    </div>
  )
}

export default Type