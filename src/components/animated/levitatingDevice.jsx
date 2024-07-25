'use client'
import Image from "next/image"
import {motion} from 'framer-motion'

const LevitatingDevice = ({}) => {
  return <div
  style={{
    transformStyle:"preserve-3d",
    transform: 'rotateY(-30deg) rotateX(15deg)'
  }}
  className="rounded-[24px]  bg-gradient-to-t from-green-400 to-blue-300  " >
    <motion.div
        initial={{
            transform:"translateZ(8px) translateY(-2px)"
        }}
        animate={{
            transform:"translateZ(32px) translateY(-8px)"
        }}
        
        transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2.5,
            ease: "easeInOut"
        }}
    className="relative h-72 w-44 rounded-[24px] border-2 border-b-4 border-r-4 border-slate-800 border-l-slate-900 border-t-slate-900 bg-slate-50 p-1 pl-[3px] pt-[3px] overflow-hidden">
        <Image src='/photographicSS.png' alt='' fill className="object-contain "  />
    </motion.div>
  </div>
}

export default LevitatingDevice