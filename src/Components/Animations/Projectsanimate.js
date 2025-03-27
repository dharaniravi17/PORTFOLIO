import React from 'react'
import { motion } from 'framer-motion'
import Description from '../Description'
import Typical from 'react-typical'

const Projectsanimate = () => {
return (
    <div style={{ display: 'flex' ,height:1000}}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <motion.div style={{ width: 700, backgroundColor: 'rgb(0, 0, 0)', height: 200, color: 'white',cursor:'pointer',
                    borderRadius: 10, marginLeft: 100, marginTop: 100, display: 'flex' ,backgroundImage:'url(chatbot.jpg)'}}
                    initial={{ opacity: 0, x: -100 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }} ><h2 style={{ margin: 20, fontWeight: 'initial' }}>AI Chatbot
                    <img src='' style={{}}/></h2></motion.div>
            <motion.div style={{ width: 700, backgroundColor: 'rgb(0, 0, 0)', height: 200, color: 'white',cursor:'pointer',
                    borderRadius: 10, marginLeft: 100, marginTop: 60, display: 'inline',backgroundImage:'url(AI.jpg)' }}
                    initial={{ opacity: 0, x: -100 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}><h2 style={{ margin: 20, fontWeight: 'initial' }}>GenAI Suite
                    <img/></h2></motion.div>
            <motion.div style={{ width: 700, backgroundColor: 'rgb(37, 38, 38)', height: 200, color: 'white',backgroundImage:'url(bot.jpg)',cursor:'pointer',
                    borderRadius: 10, marginLeft: 100, marginTop: 60 }}
                    initial={{ opacity: 0, x: -100 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}><h2 style={{ margin: 20, fontWeight: 'initial' }}>Aura - An AI Voice Assistant
                    <img/></h2></motion.div>
        </div>
        <div style={{ marginLeft: 100 }}>
            <motion.div style={{ width: 500, backgroundColor: 'rgb(20, 26, 52)', height: 600, color: 'white',
            display:'flex',borderRadius: 10, marginTop: 100, flexDirection: 'column', padding: 20 }}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}>
                <h2 style={{ fontWeight: 'initial' }}>Description</h2>
                <h3 style={{  }}>
                    <Typical steps={["","Developed a customer support chatbot using Python, improving query resolution times by 40%. Collaborated with cross-functional teams to design conversational flows and enhance user experience through user testing and feedback. "]}/></h3>

                    <h3 style={{  }}>
                    <Typical steps={["",9000,"GenAI Suite is an AI-powered content creation platform that automates blog writing, article generation, and creative storytelling. Leveraging advanced NLP models, it helps users generate high-quality, engaging content with minimal effort. From crafting well-structured blog posts based on keywords to generating unique and captivating story chapters, GenAI Suite streamlines content creation for social media, websites, and marketing needs, making it an essential tool for writers, businesses, and creators. "]}/></h3>
            
                    <h3 style={{  }}>
                    <Typical steps={[ "",14000,"Aura is an AI-powered voice assistant designed for seamless interaction, automation, and smart responses. Using advanced NLP and speech recognition, it understands commands, provides real-time assistance, and enhances productivity. Whether it's answering queries, controlling smart devices, or assisting with tasks, [Your Voice Assistant Name] makes everyday interactions effortless and intelligent. "]}/></h3>
            </motion.div>
        </div>
    </div>
)
}

export default Projectsanimate