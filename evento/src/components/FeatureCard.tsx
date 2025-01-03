'use client'
import { PiClockClockwiseBold } from "react-icons/pi";
import { motion} from 'motion/react';
import { IconType } from "react-icons";

interface FeatureCardProps {
    title : string;
    description : string;
    icon : IconType;
}

export default function FeatureCard(props : React.FC<FeatureCardProps>){
    return  <motion.div
            whileHover={{scale : 1.1}}
            className="relative bg-brand-200 backdrop-blur-md bg-opacity-70 rounded-2xl p-4 text-brand-950 w-80 h-80 overflow-hidden">
                <div className="absolute left-0 top-0 w-2 bg-brand-950 h-full"></div>
                <div>
                    <PiClockClockwiseBold  className="w-full h-20"/>
                    <br/>
                    <h1 className="text-3xl font-bold text-center">Time-Saving</h1>
                    <br/>
                    <p className="text-justify">Quick and easy navigation to find desired events or items. Real-time availability updates to secure purchases instantly.</p>
                </div>
            
    </motion.div>
}