'use client'
import { motion} from 'motion/react';

interface ContactCardProps {
    title : string;
    description : string;
    icon : React.ReactNode;
}

export default function ContactCard({title, description,icon}: ContactCardProps){
    return  <motion.div
            whileHover={{scale : 1.1}}
            className="relative bg-brand-200 backdrop-blur-md bg-opacity-70 rounded-2xl p-4 text-brand-950 w-72 h-20 overflow-hidden">
                <div className="absolute left-0 top-0 w-2 bg-brand-950 h-full"></div>
                <div className='flex items-center justify-center gap-4 h-full'>
                    <div className='flex gap-2 items-center'>
                        <div>{icon}</div> 
                        <h1 className="text-2xl font-bold text-center">{title}</h1>
                    </div>
                    <div className='text-pretty'>{description}</div>
                </div>
    </motion.div>
}