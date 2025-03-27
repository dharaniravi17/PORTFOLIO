import React from 'react'
import Skillsanimate from './Skillsanimate'
import { motion } from 'framer-motion'

const Square1 = () => {
  return (
    <div style={{marginTop:200,marginLeft:200,width:200,}}>
        <motion.div style={{fontSize:60,
        marginTop:200,display:'flex', fontFamily: "poppins",color:'rgb(52, 54, 55)'}}
        initial={{opacity:0,x:0}}
        animate={{opacity:2,x:200}}
        transition={{duration:2}}>Dharani Ravi</motion.div>
        <Skillsanimate />
    </div>
  )
}

export default Square1