import React from 'react';
import { motion } from 'framer-motion';

function Loading() {

    const loadingContainerVariants = {
        start: {
            transition: {
                staggerChildren: 0.1
            }
        },
        end: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const loadingCircleVariants = {
        start: {
            y: "0%"
        },
        end: {
            y: "100%"
        }
    };

    const loadingCircleTransition = {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeInOut"
    }

    return (
        <div>
            <motion.div 
                className='flex items-center gap-2'
                variants={loadingContainerVariants}
                initial="start"
                animate="end"
            >
                <motion.span 
                    className='block w-3 h-3 bg-black rounded-full' 
                    variants={loadingCircleVariants}
                    initial="start"
                    animate="end"
                    transition={loadingCircleTransition}
                />
                <motion.span 
                    className='block w-3 h-3 bg-black rounded-full' 
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span 
                    className='block w-3 h-3 bg-black rounded-full' 
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
            </motion.div>
        </div>
    )
}

export default Loading