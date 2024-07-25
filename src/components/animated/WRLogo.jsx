import Link from "next/link"
import{motion} from"framer-motion"


const WRLogo = ({href}) => {

    const mainVariants ={
        initial:{
            scale:.9,
            opacity:0,
        },
        animate:{
            scale: 1,
            opacity: 1,
        }
    }
    const leftSpanVariants ={
        initial:{
            x:20
        },
        animate:{
            x: 0
        }
    }
    const rightSpanVariants ={
        initial:{
            x: -20
        },
        animate:{
            x: 0
        }
    }

  return(
    <motion.div
    variants={mainVariants}
    initial='initial'
    animate="animate" 
    whileTap={{scale:0.99}}

    className="md:hidden w-1/5 lg:flex justify-center items-center"
    >
        <Link href={href} className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-between w-fit ">
            <motion.span
                variants={leftSpanVariants}

             className="text-white mr-1 flex items-center justify-center  ">Waliul</motion.span>
            <motion.span
                variants={rightSpanVariants}

            className="rounded-md bg-white h-8 w-12 flex items-center justify-center " >Rohan</motion.span>
        </Link>
    </motion.div>
  )
}

export default WRLogo