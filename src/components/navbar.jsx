"use client"
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

    return <div className="h-full flex justify-between items-center px-4 md:px-12 lg:px-20  xl:px-48">
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
        <div className="md:hidden">
            <Image src='/menu.png' alt="menu" height={28} width={28} className="z-50 relative" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && <div className="absolute top-0 left-0 w-screen h-screen bg-green-300 text-white flex flex-col items-center justify-center gap-8 text-4xl ">
                {menuLinks.map(link => {
                    return <Link key={link.link} href={link.link} >{link.title}</Link>
                })}
            </div>}
        </div>
    </div>
}

export default Navbar