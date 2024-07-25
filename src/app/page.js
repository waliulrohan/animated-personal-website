'use client'
import Image from "next/image";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
// import { useEffect } from "react";
import StaggeredText from "@/components/animated/staggeredText";


export default function Home() {
  
  // const COLORS = ["#dcfce7" ,"#dcfce8" ,"#dcfce9" ,"#dcfce1" ];
  // const color = useMotionValue(COLORS[0]);
  // const backgroundImage = useMotionTemplate`radial-gradiant(125% 125% at 50% 0% , #020617 50%, ${color})`;  
  // useEffect(()=>{
  //   animate(color, COLORS,{
  //     ease: "easeInOut",
  //     duration: 10,
  //     repeat: Infinity,
  //     repeatTyupe: 'mirror'
  //   })
  // },[])
  return (
    <motion.div
      initial={{y:"-200vh"}}
      animate={{y: '0%'}}
      transition={{duration: .8}} 
    className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto md:overflow-hidden"
    >
      {/* IMAGE CONTAINER */}
      <div className="h-2/5 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-3/5 lg:h-full lg:w-1/2 flex flex-col gap-4 md:gap-8 items-start justify-center text-start">
        {/* TITLE */}
        <div className="flex gap-1">
          <StaggeredText>
            Waliul
          </StaggeredText>
          <StaggeredText>
            Ruhan
          </StaggeredText>
        </div>
        {/* DESC */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
        <button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">
          View My Work
        </button>
        <motion.button whileTap={{scale:.9 , rotate:'2deg'}} className="p-2 rounded-lg ring-1 ring-black">
          Contact Me
        </motion.button>
      </div>
      </div>
    </motion.div>
  );
}
