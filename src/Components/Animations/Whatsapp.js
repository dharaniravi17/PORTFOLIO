import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp , FaLinkedin, FaInstagram} from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div style={{ marginRight: 50, textAlign: 'center' }}>
        <motion.div>
          <h2>Whatsapp at</h2>
        </motion.div>
        <a style={{ cursor: 'pointer', color: 'green' }}>
          <FaWhatsapp style={{ fontSize: 40 }} />
        </a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2>Connect at</h2>
        <motion.div>
          <a href='https://www.linkedin.com/in/dharani-ravi' style={{ cursor: 'pointer', color: 'rgb(1, 26, 77)' }}>
            <FaLinkedin style={{ fontSize: 40,color:"rgb(36, 75, 155)" }} />
          </a>
        </motion.div>
      </div>
      <div style={{ textAlign: 'center',marginLeft:40 }}>
        <h2>Connect at</h2>
        <motion.div>
          <a href='https://www.instagram.com/_.rd.17._/' style={{ cursor: 'pointer',}}>
            <FaInstagram style={{ fontSize: 40,background: "linear-gradient(45deg,rgb(249, 157, 65),rgb(130, 38, 173))",borderRadius:10}} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Whatsapp