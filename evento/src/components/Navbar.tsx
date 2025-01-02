"use client"
import { useState } from "react";
import {AnimatePresence, motion} from 'motion/react';

export default function Navbar(){
    const [isOpen,setOpen] = useState(false);
    return <div className="mx-4 md:mx-10 z-50 sticky top-8 mt-8 px-5 md:px-10 backdrop-blur-md bg-opacity-70 bg-white rounded-lg text-black">
                <div className="flex justify-between items-center">
                        <div className="h-12 flex items-center">
                            <img className="h-10" src="/logo.png" />
                        </div>
                        <div className="flex gap-10 hidden md:block">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                            <a href="#">Option 4</a>
                        </div>
                        <div className="md:hidden">
                            <button className="align-middle" onClick={()=>setOpen(!isOpen)}>
                                <div className="flex flex-col gap-1 justify-center">
                                    <motion.div className="w-10 h-1 bg-brand-600 rounded-full" 

                                    ></motion.div>
                                    <motion.div className="w-10 h-1 bg-brand-600 rounded-full"></motion.div>
                                    <motion.div className="w-5 h-1 bg-brand-600 rounded-full"></motion.div>
                                </div>
                            </button>
                        </div>
                        
                </div>
                <AnimatePresence>
                    {isOpen && <motion.div className="flex flex-col text-center gap-4 py-4 overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{
                            height : 'auto'
                        }}
                        exit={{height:0}}
                        transition={{duration:0.5, ease:'easeInOut'}}
                    >
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                            <a href="#">Option 4</a>    
                    </motion.div>}
                </AnimatePresence>
    </div>
}