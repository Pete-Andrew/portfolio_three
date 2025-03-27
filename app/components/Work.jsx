//type rafce and the ES& extension will create an outline of this code
import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { motion } from "motion/react"


const Work = ({isDarkMode}) => {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}} 
        // added mt-40 to compensate for celtic dragons header image
        id="work" className='w-full px-[12%] py-10 scroll-mt-20 lg:mt-20 md:mt-4 sm:mt-4' >
            <motion.h4 
            initial={{opacity:0, y: -20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.5, delay: 0.3}} 
            
            className='text-center text-5xl font-Ovo '>
                My Portfolio</motion.h4>

            <motion.h2 
            initial={{opacity:0, y: -20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.5, delay: 0.5}} 
            className='text-center text-5x1 font-Ovo' >
                A snapshot of my favourite Work</motion.h2>

            <motion.p 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration: 0.5, delay: 0.7}} 
            className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
                Below is a selection of my work both for clients and personal projects</motion.p>

            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 0.6, delay: 0.9}} 
            className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                {workData.map((project, index) => (
                    <motion.div 
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                    key={index}
                        // in order to change the bgImage you need to change the target img in the assets.js file
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        

                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                        py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border-2 border-slate-800'>
                            {/* text for the portfolio thumbnails, text can be changed in the assets.js file */}
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9
                            aspect-square flex items-center justify-center shadow-
                            [2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                {/* anchor tag needs to wrap the image to be clickable */}
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Image src={project.icon} alt="send icon" className='w-5' />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                target="_blank"
                href="https://github.com/Pete-Andrew?tab=repositories" className='w-max flex items-center justify-center gap-2  
            text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
            my-20 hover:bg-lightHover duration-500 
            dark:text-white dark:border-white dark:hover:bg-darkHover'>
                Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right Arrow'
                    className='w-4' /></motion.a>

        </motion.div>


    )
}

export default Work