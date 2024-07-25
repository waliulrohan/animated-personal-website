'use client'
import { AnimatePresence , motion } from "framer-motion"
import Navbar from "../navbar"
import { usePathname } from "next/navigation"


const PageTransitionProvider = ({ children }) => {
    const pathName = usePathname()
    return(
     <AnimatePresence mode='wait'>
        <div
         className="h-dvh w-screen bg-gradient-to-t from-green-300 to-blue-200 overflow-hidden"
         key={pathName}
         >
          
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
            animate={{height:'0vh'}}
            exit={{height:'140vh'}}
            transition={{duration: .4 , ease:'easeOut'}}
          />
          <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
            initial={{opacity: 1}}
            animate={{opacity: 0, display:'none'}}
            exit={{opacity: 0, display:'none'}}
            transition={{duration: .8 , ease:'easeOut'}}
          >
            {pathName.substring(1)}
          </motion.div>
          <motion.div
            className="h-screen w-screen fixed bg-black bottom-0 rounded-t-[100px] z-40"
            initial={{height:'140vh'}}
            animate={{height:'0vh', transition:{delay: .4}}}
          />

          <div className="h-24">
            <Navbar />
          </div>

          <div className="h-[calc(100dvh-6rem)] w-screeen">
            {children}
          </div>
        </div>
     </AnimatePresence>
        )
}

export default PageTransitionProvider