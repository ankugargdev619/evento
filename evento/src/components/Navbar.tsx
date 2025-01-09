"use client"
import { useState } from "react";
import {AnimatePresence, motion} from 'motion/react';

const options = [
    {
        name : "Home",
        link : "#"
    },
    {
        name : "Events",
        link : "#"
    },
    {
        name : "Merchandise",
        link : "#"
    },
    {
        name : "About Us",
        link : "#"
    }
]

export default function Navbar(){
    const [isOpen,setOpen] = useState(false);
    return <div className="sticky top-8 mx-4 md:mx-10 z-50">
        <div className=" w-full px-4 md:px-10 absolute backdrop-blur-md bg-opacity-50 bg-white rounded-lg text-black">
                    <div className="flex justify-between items-center">
                            <div className="h-12 flex items-center">
                                <img className="h-10" src="/logo.png" />
                            </div>
                            <div className="hidden md:block">
                                <div className="flex gap-10 ">
                                    {options.map((element,idx)=>(<a key={idx} href={element.link}>
                                    {element.name}
                                    </a>))}
                                </div>
                            </div>
                            <div className="md:hidden">
                                <motion.button
                                    initial={false}
                                    className="align-middle w-10"  
                                    onClick={()=>setOpen(!isOpen)}
                                    animate={isOpen ? "open" : "closed"}>
                                    <div className="relative h-5 flex flex-col gap-1 justify-center">
                                        <motion.span
                                            style={{
                                                left:"50%",
                                                top:"10%",
                                                x:"-50%",
                                                y : "-50%"
                                            }}
                                            variants={{
                                                open: {
                                                    top : ["10%","50%","50%"],
                                                    rotate : ["0deg","0deg","45deg"]
                                                },
                                                closed : {
                                                    rotate : ["45deg","0deg","0deg"],
                                                    top : ["50%","50%","10%"],
                                                }
                                            }}
                                            className="absolute right-0 -translate-y-2  w-10 h-1 bg-brand-600 rounded-full" />
                                        <motion.span 
                                            style={{
                                                left:"50%",
                                                top:"50%",
                                                x:"-50%",
                                                y : "-50%"
                                            }}
                                            variants={{
                                                open : {
                                                    rotate : ["0deg","0deg","-45deg"]
                                                },
                                                closed : {
                                                    rotate : ["-45deg","0deg","0deg"]
                                                }
                                            }}
                                            className="absolute w-10 h-1 bg-brand-600 rounded-full" />
                                        <motion.span
                                            style={{
                                                left:"calc(50% + 10px)",
                                                top:"90%",
                                                x:"-50%",
                                                y : "-50%"
                                            }}
                                            variants={{
                                                open: {
                                                    left:"50%",
                                                    top : ["90%","50%","50%"],
                                                    rotate : ["0deg","0deg","45deg"]
                                                },
                                                closed : {
                                                    left:"calc(50% + 10px)",
                                                    rotate : ["45deg","0deg","0deg"],
                                                    top : ["50%","50%","90%"],
                                                }
                                            }}
                                            className="absolute w-5 h-1 right-0 translate-y-2 bg-brand-600 rounded-full" />
                                    </div>
                                </motion.button>
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
                                {options.map((element,idx)=>(<a key={idx}  onClick={()=>{setOpen(false)}}  href={element.link}>
                                    {element.name}
                                    </a>))}  
                        </motion.div>}
                    </AnimatePresence>
        </div>
    </div>
}