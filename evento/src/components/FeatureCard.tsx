'use client'
import { motion} from 'motion/react';

interface FeatureCardProps {
    title : string;
    description : string;
    icon : React.ReactNode;
}

export default function FeatureCard({title, description,icon}: FeatureCardProps){
    return  <motion.div
            whileHover={{scale : 1.1}}
            className="relative bg-brand-200 backdrop-blur-md bg-opacity-70 rounded-2xl p-4 text-brand-950 w-72 h-84 overflow-hidden">
                <div className="absolute left-0 top-0 w-2 bg-brand-950 h-full"></div>
                <div>
                    <div className="flex justify-center">{icon}</div>
                    <br/>
                    <h1 className="text-3xl font-bold text-center">{title}</h1>
                    <br/>
                    <p className="text-justify pl-4 pb-2">{description}</p>
                </div>
    </motion.div>
}