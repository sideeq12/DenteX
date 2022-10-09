import React from 'react'
import { motion } from "framer-motion"
import "./mygall.css"
const ImageComp = () => {
  return ( <div className='gall'>
    
    <motion.img src='first.jpg' alt='Welcome image'
    initial={{ opacity : "0", y : 200, opacity : 0}}
    animate={{ opacity : "1", y : 0, opacity : 1}}
    transition={{delay : "1", duration : "0.5", ease : 'easeInOut'}}
    />
  </div>
  )
}

export default ImageComp