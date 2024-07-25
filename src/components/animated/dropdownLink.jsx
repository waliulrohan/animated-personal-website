"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"



const DropdownLink = ({children, href, DropdownComponent}) => {
  const [open , setOpen] = useState(false);
  const showComponent = open && DropdownComponent ;

  const dropdownVariants={
    initial:{opacit:0, y:15},
    animate:{opacit: 1, y:0},
    exit:{opacit:0, y:15},
  }

  return(
    <div
      onMouseEnter={()=> setOpen(true)}
      onMouseLeave={()=> setOpen(false)}

      className="relative h-fit w-fit">
        <Link href={href} className="relative text-black" >{children}
          <span
            style={{
              transform: open ? 'scaleX(1)' : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-500 transition-transform duration-300 ease-out "
          />
        </Link> 

          {showComponent &&(
            <motion.div
            variants={dropdownVariants}  
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration:0.3, ease:'easeOut' }}
            style={{
              x: '-50%',
            }}

            className="absolute left-1/2 top-12 bg-white text-black">
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent "/>
              <div className="absolute left-1/2 rotate-45 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 bg-white  "/>
              <DropdownComponent/>
            </motion.div>
          )}
    </div>
  )
}

export default DropdownLink