"use client"
import { motion, useScroll, useTransform } from"framer-motion"
import { useRef } from "react"

const IMG_PADDING = 12
const TextParallax = ({imgUrl , subHeading , heading , children}) => {
  return(
   <div
       style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
       }} 
         className="" 
    >
        <div className="relative h-[170vh]">
            <StickyImage imgUrl={imgUrl} />
        </div>
    {children}
  </div>
  )
}

const StickyImage = ({imgUrl}) => {
    const ref  = useRef(null);
    const { scrollYProgress } = useScroll({target: ref , offset:['end end','end start'] } );

    const scale = useTransform(scrollYProgress , [0 , 1] , [1 , 0.5])
    return(
     <motion.div 
        ref={ref}
        style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'center',
            backgroundPosition: 'center',
            height: `calc(100vh - ${IMG_PADDING * 2}px)`,
            top:IMG_PADDING,
            scale,
        }}
        className="sticky z-0 overflow-hidden rounded-3xl "
     >
      <motion.div/>
    </motion.div>
    )
  }
  

export default TextParallax