"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const menuLinks = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/portfolio", title: "Portfolio" },
    { link: "/contact", title: "Contact" },
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
          
        },
      };
    
      const listVariants = {
        closed: {
          x: "100vw",
        },
        opened: {
          x: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      };

    return <div className="h-full flex justify-between items-center px-4 md:px-12 lg:px-20  xl:px-48 ">
        {/* LINKS  */}
        <div className=" text-black hidden md:flex  items-center justify-center text-lg font-semibold gap-3 w-2/5">
                {menuLinks.map(link => {
                    return <Link className={`hover:bg-black hover:text-white rounded p-1 ${pathname === link.link && 'bg-black text-white '}`} key={link.link} href={link.link} >{link.title}</Link>
                })}
        </div>

        {/* LOGO  */}
        <div className="md:hidden w-1/5 lg:flex justify-center items-center">
            <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-between w-fit ">
                <span className="text-white mr-1 flex items-center justify-center  ">Waliul</span>
                <span className="text-black rounded-md bg-white h-8 w-12 flex items-center justify-center " >ruhan</span>
            </Link>
        </div>

        {/* SOCIAL */}
        <div className="hidden md:flex w-2/5 justify-center items-center gap-3">
            <Link href="#">
               <Image src='/github.png' alt="menu" height={28} width={28}/>
            </Link>
            <Link href="#">
               <Image src='/twitter.png' alt="menu" height={28} width={28}/>
            </Link>
        </div>

        {/* MENU ICON */}
        <div className="md:hidden" onClick={()=> setIsOpen(!isOpen)}>
            <motion.div className="w-10 h-8 flex flex-col justify-between z-50 relative">
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
            {isOpen && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-50  text-black font-semibold flex flex-col items-center justify-center gap-5 text-4xl z-20
            bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl border border-white border-opacity-20 shadow-lg
            ">
                {menuLinks.map(link => {
                    return <Link key={link.link} href={link.link} >{link.title}</Link>
                })}
                <div className="flex justify-center items-center gap-5 mt-2">
                    <Link href="#">
                    <Image src='/github.png' alt="menu" height={28} width={28}/>
                    </Link>
                    <Link href="#">
                    <Image src='/twitter.png' alt="menu" height={28} width={28}/>
                    </Link>
                </div>
            </div>}
        </div>
    </div>
}

export default Navbar