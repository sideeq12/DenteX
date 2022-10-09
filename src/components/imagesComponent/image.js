import React from 'react'
import { motion } from "framer-motion"
import "./mygall.css"
const ImageComp = () => {
  return ( <div className='gall'>
    
    <motion.img src='first.jpg' alt='Welcome image'
    initial={{ opacity : "0", pathLength : 0}}
    animate={{ opacity : "1", pathLength : 1}}
    transition={{delay : "1.6", duration : "2"}}
    />
  </div>
  )
}

export default ImageComp