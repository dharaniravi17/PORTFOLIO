import React from 'react'
import { motion } from 'framer-motion'

const Square2 = () => {
  return (
    <div>
        <motion.div style={{height:200,width:400,fontSize:20,color:'rgb(52, 54, 55)',lineHeight:1.5,fontStyle:'italic',
        }}
        initial={{ x: -200, y: 0, opacity:0 }}
        animate={{ x: 690, y: -130 ,opacity:2}}
        transition={{duration:2}}>An Enthusiastic AI Engineering student with a keen interest in machine learning and data analysis. Proficient in <span style={{color:'rgb(44, 103, 126)'}}>Python</span> and <span style={{color:'rgb(54, 124, 152)'}}>Frontend</span> developing skills with a 
        strong foundation in software development </motion.div>
    </div>
  )
}

export default Square2