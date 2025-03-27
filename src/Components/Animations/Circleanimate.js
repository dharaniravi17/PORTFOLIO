import React from 'react'
import { motion } from 'framer-motion'

const Circleanimate = () => {
  return (
    <div>
        <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 500,
                flexDirection: "column",
                marginTop:500
              }}
            >
              <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10,marginRight:5}}>English</h3>
               <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                style={{ transform: "rotate(-90deg)" }} // Rotate to start progress at the top
              >
                {/* Background Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgb(70, 77, 92)"
                  strokeWidth="10"
                />
        
                {/* Animated Progress Circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgb(30, 168, 69)" // Green color for progress
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 50}`} // Circumference calculation inline
                  strokeDashoffset={`${2 * Math.PI * 50}`} // Start hidden
                  animate={{
                    strokeDashoffset: `${2 * Math.PI * 50 * (1 - 90 / 100)}`, // Offset for 75% progress
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }} // Smooth animation
                />
              </svg>
              <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10,marginRight:5}}>Tamil</h3>
               <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                style={{ transform: "rotate(-90deg)" }} // Rotate to start progress at the top
              >
                {/* Background Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgb(70, 77, 92)"
                  strokeWidth="10"
                />
        
                {/* Animated Progress Circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgb(30, 168, 69)" // Green color for progress
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 50}`} // Circumference calculation inline
                  strokeDashoffset={`${2 * Math.PI * 50}`} // Start hidden
                  animate={{
                    strokeDashoffset: `${2 * Math.PI * 50 * (1 - 95 / 100)}`, // Offset for 75% progress
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }} // Smooth animation
                />
              </svg>
              <h3 style={{fontSize:25,height:20,color:'rgb(52, 54, 55)',fontWeight:10,marginRight:5}}>German</h3>
               <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                style={{ transform: "rotate(-90deg)" }} // Rotate to start progress at the top
              >
                {/* Background Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgb(70, 77, 92)"
                  strokeWidth="10"
                />
        
                {/* Animated Progress Circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgb(30, 168, 69)" // Green color for progress
                  strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 50}`} // Circumference calculation inline
                  strokeDashoffset={`${2 * Math.PI * 50}`} // Start hidden
                  animate={{
                    strokeDashoffset: `${2 * Math.PI * 50 * (1 - 40 / 100)}`, // Offset for 75% progress
                  }}
                  transition={{ duration: 3, ease: "easeInOut" }} // Smooth animation
                />
              </svg>
            </div>
    </div>
  )
}

export default Circleanimate