"use client"
import { useState } from "react";
import {AnimatePresence, motion} from 'motion/react';

export default function Navbar(){
    const [isOpen,setOpen] = useState(false);
    return <div className="sticky top-8 mx-4 md:mx-10 z-50">
        <div className=" w-full px-4 md:px-10 absolute backdrop-blur-md bg-opacity-70 bg-white rounded-lg text-black">
                    <div className="flex justify-between items-center">
                            <div className="h-12 flex items-center">
                                <img className="h-10" src="/logo.png" />
                            </div>
                            <div className="hidden md:block">
                                <div className="flex gap-10 ">
                                    <a href="#">Option 1</a>
                                    <a href="#">Option 2</a>
                                    <a href="#">Option 3</a>
                                    <a href="#">Option 4</a>
                                </div>
                            </div>
                            <div className="md:hidden">
                                <button className="align-middle" onClick={()=>setOpen(!isOpen)}>
                                    <div className="flex flex-col gap-1 justify-center">
                                        <motion.div 
                                            
                                            className="w-10 h-1 bg-brand-600 rounded-full" />
                                        <motion.div className="w-10 h-1 bg-brand-600 rounded-full" />
                                        <motion.div className="w-5 h-1 bg-brand-600 rounded-full translate-x-5" />
                                    </div>
                                </button>
                            </div>
                            
                    </div>
                    <AnimatePresence>
                        {isOpen && <motion.div className="flex flex-col text-center gap-10 py-4 overflow-hidden text-xl text-black"
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
    </div>
}