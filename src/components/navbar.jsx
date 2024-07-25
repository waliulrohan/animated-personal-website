"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import WRLogo from "./animated/WRLogo"

const menuLinks = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/portfolio", title: "Portfolio" },
    { link: "/contact", title: "Contact" },
    { link: "/projects", title: "Projects" },
]

const Navbar = ({ }) => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
     
    const topVariants = {
        closed: {
          rotate: 0,
        },
        opened: {
          rotate: 45,
          transition: {
            duration: 0.1,
            type: 'spring',
            stiffness: 100,
            velocity: 1.5,
            damping: 10,
        },
        },
      };
      const centerVariants = {
        closed: {
          opacity: 1,
        },
        opened: {
          opacity: 0,
        },
      };
    
      const bottomVariants = {
        closed: {
          rotate: 0,
        },
        opened: {
          rotate: -45,
          transition: {
            duration: 0.1,
            type: 'spring',
            stiffness: 100,
            velocity: 1.5,
            damping: 10,
        },
        },
      };
      const modalVariants = {
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
                staggerChildren: 0.05,
            },
        },
    };
    
    
    const listItemVariants = {
        hidden: {
          x:-25,
          scale:.85,
          opacity: 0,
        },
        visible: {
          x:0,  
          opacity: 1,
          scale:1,
          transition: {
            duration: 0.15,
        },
        },
    };

      const Tab = ({text})=>{
        return(
          <li 
          className="relative block px-5 py-2 text-xs uppercase text-white mix-blend-difference z-[60]"
          >{text}</li>
        )
      }


    return <div className="h-full flex justify-between items-center px-4 md:px-12 lg:px-20  xl:px-48 ">
        {/* LINKS  */}
        <div className="hidden md:flex items-center justify-center w-2/5">
          <ul className="bg-white relative flex  items-center justify-center text-lg font-medium gap-3 w-fit border-2 border-black p-1 rounded-full">
                  {menuLinks.map(link => (
                  <Link key={link.link} href={link.link} >
                      <Tab text={link.title}/>
                  </Link>
              ))}
          </ul>
        </div>

        {/* LOGO  */}
            <WRLogo href='/' />

        {/* SOCIAL */} 
        <div className="hidden md:flex w-2/5 justify-center items-center gap-3">
            <motion.div>
                <Link href="#">
                  <Image src='/github.png' alt="menu" height={28} width={28}/>
                </Link>
              </motion.div>
              <motion.div>
                <Link href="#">
                  <Image src='/twitter.png' alt="menu" height={28} width={28}/>
                </Link>
              </motion.div>
              <motion.div>
                <Link href="#">
                  <Image src='/github.png' alt="menu" height={28} width={28}/>
                </Link>
            </motion.div>
        </div>

        {/* MENU ICON */}
        <div className="md:hidden" >
            <motion.div className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=> setIsOpen(!isOpen)}>
                <motion.div 
                    variants={topVariants}
                    animate={isOpen ? "opened" : "closed"}
                    className="h-1 w-10 bg-black rounded-full  origin-left" 
                 />
                <motion.div 
                    variants={centerVariants}
                    animate={isOpen ? "opened" : "closed"}
                    className="h-1 w-10 bg-black rounded-full  " 
                 />
                <motion.div 
                    variants={bottomVariants}
                    animate={isOpen ? "opened" : "closed"}                   
                    className="h-1 w-10 bg-black rounded-full  origin-left" 
                />
            </motion.div>
            {/* MENU MODAL */}
            <AnimatePresence 
            initial={false} 
            mode={'wait'}
             >
              {isOpen && <motion.div className="absolute top-0 left-0 h-[100dvh] w-screen flex items-center justify-center">
                    <motion.div
                    variants={modalVariants}
                      initial="hidden"
                      animate="visible"
                      exit='hidden'
                      
                  className=" w-3/4 h-3/4 bg-green-50  text-black font-semibold flex flex-col items-center justify-center gap-5 text-4xl z-[20]
                  bg-opacity-50 backdrop-filter backdrop-blur-lg  rounded-xl border border-white border-opacity-20 shadow-lg
                  ">
                      {menuLinks.map(link => {
                          return  <motion.div
                          variants={listItemVariants}
                          key={link.link}
                          whileTap={{scale:.9 , rotate: '5deg'}}
                        >
                          <Link href={link.link}>{link.title}</Link>
                        </motion.div>
                      })}
                      <motion.div variants={listItemVariants}  className="flex justify-center items-center gap-5 mt-2">
                        <motion.div>
                          <Link href="#">
                            <Image src='/github.png' alt="menu" height={28} width={28}/>
                          </Link>
                        </motion.div>
                        <motion.div>
                          <Link href="#">
                            <Image src='/twitter.png' alt="menu" height={28} width={28}/>
                          </Link>
                        </motion.div>
                        <motion.div>
                          <Link href="#">
                            <Image src='/github.png' alt="menu" height={28} width={28}/>
                          </Link>
                        </motion.div>
                      </motion.div>
                  </motion.div>
              </motion.div> }
            </AnimatePresence>
        </div>
    </div>
}

export default Navbar