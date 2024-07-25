import { motion } from "framer-motion"


const DURATION = 0.2;
const STAGGER = 0.025;
const StaggeredText = ({children}) => {
  return(
   <motion.div
    initial="initial"
    whileHover="hovered"
    className="relative block overflow-hidden whitespace-nowrap font-black uppercase text-4xl md:text-6xl lg:text-7xl"
    style={{
        // lineHeight:'3.7rem',
        userSelect: 'none'
    }}
    >
        <div>
            {children.split("").map((l, i)=>(
                <motion.span
                variants={{
                    initial:{ y:0},
                   hovered: { y: "-100%" }
                }}
                transition={{
                    duration: DURATION,
                    ease: 'easeInOut',
                    delay: STAGGER * i,
                }}
                key={i}
                 className="inline-block lg:h-[4rem]"
                >
                    {l}
                </motion.span>
            ))}
        </div>
        <div className="absolute inset-0">
            {children.split("").map((l, i)=>(
                <motion.span
                variants={{
                    initial:{ y: "100%" },
                   hovered: { y: 0 }
                }}
                transition={{
                    duratin: DURATION,
                    ease: 'easeInOut',
                    delay: STAGGER * i,
                }}
                key={i}
                 className="inline-block lg:h-[4rem]"
                >
                    {l}
                </motion.span>
            ))}
        </div>
  </motion.div>)
}

export default StaggeredText