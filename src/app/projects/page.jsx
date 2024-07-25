"use client"
import {  motion } from "framer-motion"

const Page = ({}) => {
  return(
    <motion.div
      initial={{y:"-200vh"}}
      animate={{y: '0%'}}
      transition={{duration: .8}} 
    className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto md:overflow-hidden"
    >
      projects
    </motion.div>
  )
}

export default Page