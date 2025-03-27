import React, { useState } from "react";
import { motion } from "framer-motion";

const AbstractLinesBackground = () => {
  const [lines] = useState(
    [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      angle: Math.random() * 360,
    }))
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {lines.map((line, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={{ left: 0, right: window.innerWidth, top: 0, bottom: window.innerHeight }}
          initial={{
            x: line.x,
            y: line.y,
            opacity: 0,
            rotate: line.angle,
            scaleX: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scaleX: [0, 1, 1, 0],
            x: [line.x, line.x + Math.random() * 100 - 50], // Moves left & right
            y: [line.y, line.y + Math.random() * 100 - 50], // Moves up & down
          }}
          transition={{
            duration: 6 + Math.random() * 4, // Slower animation
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "300px", // Increased length
            background: "rgba(237, 228, 228, 0.8)",
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
};

export default AbstractLinesBackground;
