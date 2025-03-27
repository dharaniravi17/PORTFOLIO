import React from 'react'
import Typical from 'react-typical'

const Skillstype = () => {
return (
    <div style={{position:'absolute',
       width:300,height:100,display:'flex',alignContent:'center',marginLeft:720}}>
           <h1 style={{color:'gray',position:'relative',marginTop:50,fontSize:50}}>My Skills</h1>
           <div style={{position:'absolute'}}>
               <h1 style={{color:'rgb(49, 96, 134)',fontSize:50}}>
                   <Typical steps={['',600,'My Skills',1000]}
                   loop={4}/></h1>
           </div>
           
       </div>
)
}

export default Skillstype