import React from 'react'
import { motion } from "framer-motion"

function Waveline() {
  return (
    <svg  style={{ zIndex : "-1",
     position : "absolute",
     top : "200px", left : "0px" }} viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
stroke="rgb(139, 19, 209)"
initial={{strokeOpacity : 0 , pathLength : 0 ,pathOffset : 1 }} 
animate={{strokeOpacity : 1 , pathLength : 1 , pathOffset : 0}}
transition={{duration : 2 , ease : 'easeInOut', delay : "2"}}
strokeWidth="5"/>
</svg>
  )
}

export default Waveline