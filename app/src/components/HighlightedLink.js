import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion"


function HighlightedLink(props) {
  const componentWidth = 300;
  const componentHeight = 200;
  //const containerRef = props.containerRef;

  
  useEffect(() => { 
    console.log('props.highlightMode', props.highlightMode);
  }, [props.highlightMode]);
  
  
  return (
    <motion.div 
      //animate={'highlight'}
      //initial="highlight"
      //variants={variants}
      onClick={() => props.navigator.handleLinkClick(props.link.href)}
      style={{
        position: "absolute",
        top: props.link.top + "px",
        left: props.link.left + "px",
        display: "inline-block",
        width: "auto",
        background: props.index == 0 ? "#FFE604" : "#ddd",
        color: props.index == 0 ? "#000" : "#000",
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




