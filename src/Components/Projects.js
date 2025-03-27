import React from 'react'
import Navbar from './Navbar'
import Projectsanimate from './Animations/Projectsanimate'
import Description from './Description'
import AbstractLinesBackground from './Animations/RightBackground'

const Projects = () => {
  return (
    <div>
        <Navbar />
        <AbstractLinesBackground/>
        <Projectsanimate />
    </div>
  )
}

export default Projects