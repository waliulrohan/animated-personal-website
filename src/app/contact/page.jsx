"use client"
import {  motion } from "framer-motion"
import { useState } from "react";

const ContactPage = () => {
  const [success , setSuccess] = useState(false)
  const [error , seterror] = useState(false)
    return (
        <motion.div
        initial={{y:"-200vh"}}
        animate={{y: '0%'}}
        transition={{duration: .8}} 
      className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto md:overflow-hidden"
      >
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex justify-center items-center text-6xl">
          hi there
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-2/3 lg:h-full lg:w-1/2 flex flex-col justify-center gap-2 p-10 bg-green-100 rounded-xl ">
          <span>Dear Waliul Rohan,</span>
          <textarea  rows="6" className='bg-transparent border-b-2 border-b-black outline-none resize-none' placeHolder='Tell me what you think'/>
          <span>My email address is:</span>
          <input type="text" className='bg-transparent border-b-2 border-b-black outline-none' placeHolder='email' />
          <span>Regards</span>
          <button className='bg-green-300 rounded fonnt-semibold text-grey-600 p-3 '>send</button>
          {error && <span className='font-bold text-red-700 ' >Something went wrong</span> }
          {success && <span className='font-bold text-green-700 '  >Message was succesfully sent</span> }
        </div>
      </motion.div>
    );
};

export default ContactPage;
