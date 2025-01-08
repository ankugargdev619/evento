'use client'
import { PiStarFill , PiStar , PiQuotesFill } from "react-icons/pi";
import { motion} from 'motion/react';

interface ReviewProps {
    name : string,
    rating : number,
    review : string
}

export default function Review({name,rating,review} : ReviewProps){
    return <motion.div 
            whileHover={{scale : 1.1}}
            className="text-brand-950 rounded-2xl p-4 backdrop-blur-md bg-opacity-50 bg-brand-50 w-72 h-60">
            <div className="font-bold text-xl mb-1">{name}</div>
            <div className="flex gap">
                {Array.from({length : rating}, (_, i) => i + 1).map((_,y) => (
                    <div key={y}><PiStarFill /></div>
                ))}
                {Array.from({length : 5 - rating},(_,i) => i + 1).map((_,y) =>(
                    <div key={y}><PiStar /></div>
                ))}
            </div>
            <br/>
            <div className="h-30">{review}
            </div>
            
            <div className="absolute bottom-5">
                <PiQuotesFill/>
            </div>
        </motion.div>
}