"use client"
import {  motion } from "framer-motion"

const PortfolioPage = () => {
    return (
        <motion.div
        initial={{y:"-200vh"}}
        animate={{y: '0%'}}
        transition={{duration: .8}} 
      className="h-full "
      >
        Portfolio
      </motion.div>
    );
};

export default PortfolioPage;