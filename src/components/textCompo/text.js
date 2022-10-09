import React from 'react'
import { motion } from 'framer-motion'
import "./text.css"

const Dental = () => {
  return (
    <motion.div className='covertext' 
    initial={{ x : -200 , opacity : 0}}
    animate={{ x : 0, opacity : 1}}
    transition={{ duration : "0.5", delay : "0.5", ease : 'easeIn'}}>
        <div className='main'>The Leading Dental Museum in <div className='sect'>Europe <hr/></div></div>
        <p>The future of all medical procedure relies if the preivious work done, hence the storage of historical 
            parts for future application is dentistry is hereby taken in another Level.
        </p>
    <button>Check it out</button>
    </motion.div>
  )
}

export default Dental