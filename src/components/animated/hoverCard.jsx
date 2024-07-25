"use client"
import { useMotionValue, useSpring, useTransform , motion } from "framer-motion"
import Image from "next/image"


const HoverCard = ({}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX  = useTransform(mouseYSpring , [-0.5 , 0.5] , ['7deg', '-7deg'])
    const rotateY  = useTransform(mouseXSpring , [-0.5 , 0.5] , ['-7deg', '7deg'])

    const handleMouseMove =(e)=>{
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX  = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;


        const xPercentage = (mouseX / width) - 0.5;
        const yPercentage = (mouseY / height) - 0.5;
        
        x.set(xPercentage);
        y.set(yPercentage);

    }
    const handleMouseLeave =()=>{     
        x.set(0);
        y.set(0);

    }
  return <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    style={{
        transformStyle:"preserve-3d",
        rotateX,
        rotateY,
    }}
    className="relative h-96 w-72 rounded-xl  bg-gradient-to-t from-green-400 to-blue-300  "
  >
        <div
            style={{
                transformStyle:"preserve-3d",
                transform: 'translateZ(75px)'
            }}
            className="absolute inset-4 rounded-xl bg-white shadow-lg "
    >
        
        <Image src='/hero.png' alt='' fill className="object-contain "  />

    </div>
  </motion.div>
}

export default HoverCard