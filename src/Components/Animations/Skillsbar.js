import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5 , FaPython, FaReact, FaCss3, FaDatabase, FaLightbulb, FaPuzzlePiece,
  FaCommentDots,FaSitemap
} from 'react-icons/fa'


const Skillsbar = () => {
  return (
    <div className='skillsbar' style={{marginLeft:300,marginTop:300,height:100, alignContent:'center',display:'flex',flexDirection:'row',gap:400}}>
        <div><h2 style={{color:'rgb(52, 54, 55)',fontSize:30,height:50}}>Technical Skills</h2>
        <li style={{listStyle:'none'}}><h3 style={{fontSize:25,width:300,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}>Html<FaHtml5 style={{marginLeft:210 , color:'rgb(218, 142, 37)'}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
            <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
            initial={{width:0}}
            animate={{width:270}}
            transition={{duration:2}}></motion.div></span>
        <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}>CSS<FaCss3 style={{marginLeft:215 , color:'rgb(125, 119, 110)'}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
        <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
        initial={{width:0}}
        animate={{width:250}}
        transition={{duration:2}}></motion.div></span>
        <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}>Python<FaPython style={{marginLeft:175 , color:'rgb(63, 143, 218)'}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
        <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
        initial={{width:0}}
        animate={{width:200}}
        transition={{duration:2}}></motion.div></span>
        <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}> React<FaReact style={{marginLeft:190 , color:'rgb(91, 136, 39)'}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
        <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
        initial={{width:0}}
        animate={{width:250}}
        transition={{duration:2}}></motion.div></span>
        <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}>SQL<FaDatabase style={{marginLeft:220,color:"rgb(121, 42, 132)"}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
        <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
        initial={{width:0}}
        animate={{width:250}}
        transition={{duration:2}}></motion.div></span></li></div>

<div><h2 style={{color:'rgb(52, 54, 55)',fontSize:30,height:60}}>Professional Skills</h2>
        <li style={{listStyle:'none'}}><h3 style={{fontSize:25,width:300,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}>Creativity<FaLightbulb color='rgb(231, 218, 33)'style={{marginLeft:150}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
            <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
            initial={{width:0}}
            animate={{width:270}}
            transition={{duration:2}}></motion.div></span>
        <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}>Communication<FaCommentDots style={{marginLeft:70}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
        <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
        initial={{width:0}}
        animate={{width:250}}
        transition={{duration:2}}></motion.div></span>
        <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}>Design Thinking<FaSitemap style={{marginLeft:70 ,color:'rgb(136, 132, 132)'}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
        <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
        initial={{width:0}}
        animate={{width:200}}
        transition={{duration:2}}></motion.div></span>
        <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10}}> Problem Solving<FaPuzzlePiece style={{marginLeft:70,color:'rgb(111, 148, 93)'}}/></h3>
        <span style={{width:300,backgroundColor:'rgb(70, 77, 92)',height:15,display:'flex'}}>
        <motion.div style={{width:200,backgroundColor:'rgb(28, 136, 59)'}}
        initial={{width:0}}
        animate={{width:250}}
        transition={{duration:2}}></motion.div></span></li></div>
        
        
    </div>
  )
}

export default Skillsbar