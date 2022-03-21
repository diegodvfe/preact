import Popular from "../components/Popular";
import Veggie from "../components/Veggie"
import { motion } from 'framer-motion'

import React from 'react';

export default function Home (){
  return(

      <motion.div
         animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.6}}
      >
      <Veggie />
      <Popular />
      </motion.div>


  )
}