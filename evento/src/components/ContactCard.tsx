'use client'
import { motion} from 'motion/react';

interface ContactCardProps {
    description : string;
    icon : React.ReactNode;
}

export default function ContactCard({ description,icon}: ContactCardProps){
    return  <motion.div
            whileHover={{scale : 1.1}}
            className="relative bg-brand-200 backdrop-blur-md bg-opacity-70 rounded-2xl p-4 text-brand-950 w-72 h-24 overflow-hidden">
                <div className="absolute left-0 top-0 w-2 bg-brand-950 h-full"></div>
                <div className='flex items-center justify-start gap-4 h-full'>
                    <div>{icon}</div> 
                    <div className='text-pretty text-xl'>{description}</div>
                </div>
    </motion.div>
}