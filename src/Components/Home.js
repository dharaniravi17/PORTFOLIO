import React from 'react'
import Navbar from './Navbar'
import Square1 from './Animations/Square1'
import Square2 from './Animations/Square2'
import Square3 from './Animations/Square3'
import Skillsanimate from './Animations/Skillsanimate'
import { FaGithub,FaLinkedin ,FaInstagram,FaFacebook} from 'react-icons/fa'
import RightBackground from './Animations/RightBackground'
import AbstractLinesBackground from './Animations/RightBackground'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Square1 />
      <Square2 />
      <Square3 />
      <AbstractLinesBackground />
      <a href='https://github.com/dharaniravi17'><FaGithub style={{fontSize:40,marginLeft:410,cursor:'pointer',color:'black',marginTop:40}}/></a>
      <a href='https://www.linkedin.com/in/dharani-ravi/'><FaLinkedin style={{fontSize:40,color:'rgb(35, 61, 132)',marginLeft:15,cursor:'pointer'}}/></a>
      <a href='https://www.instagram.com/_.rd.17._/'><FaInstagram style={{fontSize:40,marginLeft:15,cursor:'pointer',background:'linear-gradient(45deg,rgb(230, 198, 42),rgb(122, 9, 153))',borderRadius:10}}/></a>
      <a href='#'><FaFacebook style={{fontSize:40,marginLeft:15,cursor:'pointer',color:'rgb(36, 49, 162)'}}/></a>
    </div>
  )
}

export default Home