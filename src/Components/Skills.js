import React from 'react'
import Navbar from './Navbar'
import Skillsanimate from './Animations/Skillsanimate'
import { FaGithub,FaLinkedin,FaReact,FaHtml5,FaCss3,FaPython,FaJs,FaFlask} from 'react-icons/fa'
import Skillstype from './Animations/Skillstype'
import Skillsbar from './Animations/Skillsbar'
import AbstractLinesBackground from './Animations/RightBackground'
import Circleanimate from './Animations/Circleanimate'

const Skills = () => {
  return (
    <div>
        <Navbar />
        <AbstractLinesBackground/>
        <Skillstype />
        <Skillsbar />
        <Circleanimate />
        <div style={{marginLeft:570,marginTop:200}}>
        <a><FaGithub style={{fontSize:50,marginLeft:15,cursor:'pointer',color:'black'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}
        /></a>
        <a href='https://www.geeksforgeeks.org/react/'><FaReact style={{fontSize:50,marginLeft:15,cursor:'pointer',color:'black'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}/></a>
        <a href='https://www.geeksforgeeks.org/html-tutorial/'><FaHtml5 style={{fontSize:50,marginLeft:15,cursor:'pointer',color:'black'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}/></a>
        <a href='https://www.geeksforgeeks.org/css-tutorial/'><FaCss3 style={{fontSize:50,marginLeft:15,cursor:'pointer',color:'black'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}/></a>
        <a href='https://www.geeksforgeeks.org/python-programming-language-tutorial/'><FaPython style={{fontSize:50,marginLeft:15,cursor:'pointer',color:'black'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}/></a>
        <a href=''><FaJs style={{fontSize:50,marginLeft:15,cursor:'pointer',color:'black'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}/></a>
        <a href=''><FaFlask style={{fontSize:50,marginLeft:15,cursor:'pointer',color:'black'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'black'}/></a>
        </div>
    </div>
  )
}

export default Skills