import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion"


function HighlightedLink(props) {
  const componentWidth = 300;
  const componentHeight = 200;
  const containerRef = props.containerRef;

  const calculateCenter = () => {
    if (!containerRef.current) return { top: 0, left: 0 };

    const containerRect = containerRef.current.getBoundingClientRect();
    return {
      top: (containerRect.height - componentHeight) / 2 - componentHeight / 2 + (props.index % 2) * (componentHeight + 20),
      left: (containerRect.width - componentWidth) / 2 - componentWidth + (props.index % 3) * (componentWidth + 28),
    };
  };

  const centerPosition = calculateCenter();


  const variants = {
    highlight: { 
      top: props.link.top - containerRef.current.offsetTop + "px",
      left: props.link.left - containerRef.current.offsetLeft + "px",
      transition: { duration: 0}
    },
    preview: { 
      width: "300px",
      height: "200px",
      top: centerPosition.top + "px",
      left: centerPosition.left + "px",
      //transition: { duration: 0.25, ease: 'easeOut', delay: 0 }
    },
  }

  useEffect(() => { 
    console.log('props.highlightMode', props.highlightMode);
  }, [props.highlightMode]);
  
  
  return (
    <motion.div 
      animate={props.highlightMode}
      initial="highlight"
      variants={variants}
      style={{
        position: "absolute ",
        top: props.link.top + "px",
        left: props.link.left + "px",
        display: "inline-block",
        width: "auto",
        background: "#FFE604",
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "1px",
        paddingBottom: "1px",
        fontWeight: "500",
        borderTop:"1px solid #fff",
      }}
    >
      {props.link.text}
    </motion.div>
  );
}

export default HighlightedLink;




