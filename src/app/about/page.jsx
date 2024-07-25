"use client"
import {  motion } from "framer-motion"

const mainVariants ={
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            stiffness: 150,
            velocity: 1.5,
            when: "beforeChildren",
            staggerChildren: 0.075,
        },
    },
}
const childrenVariants ={
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.1,
        },
    },
}



const AboutPage = () => {
    return (
        <motion.div
        initial={{y:"-200vh"}}
        animate={{y: '0%'}}
        transition={{duration: .8}} 
      className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto md:overflow-hidden"
      >
        about
      </motion.div> 
    );
};

export default AboutPage;