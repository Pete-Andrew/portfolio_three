import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}} 
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        {/* <motion.h4 
            initial={{opacity:0, y: -20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.5, delay: 0.3}} 
        className='text-center mb-2 text-lg font-Ovo'>Intro</motion.h4> */}
        
        <motion.h2 
            initial={{opacity:0, y: -20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.5, delay: 0.5}} 
        className='text-center text-5xl font-Ovo'>About Me</motion.h2>

        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 0.8}} 
        className='flex w-full flex-col lg:flex-row justify-items-start gap-20 my-20'>
            
            {/* bluebell wood image */}
            <motion.div 
                initial={{opacity:0, scale: 0.9}}
                whileInView={{opacity:1, scale: 1}}
                transition={{duration: 0.6, delay: 0.3}} 
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.bluebell_wood} alt='user' className ='w-full rounded-3xl' />
            </motion.div>

{/* about me blurb */}
            <motion.div 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration: 0.8, delay: 0.6}} 
            className='flex-1'>
                  <p className='mb-10 max-w-3xl font-Ovo text-justify'>
                      My primary focus is that I want to build interesting things with interesting people.
                      This may sound like a generalisation, but I am a firm believer that when driven, creative, 
                      interested people work on any project the results can be spectacular.
                      <br/><br/>
                      I have a diverse set of skills (everything from construction to digital sculpting), which I am always looking to build on and refine.
                      I am also keen to share my knowledge to help others do the same.
                      <br/><br/>
                      I am a creative and pragmatic problem solver, with an aptitude for analysing problems and finding or building solutions.
                      I work well in teams and try to bring enthusiasm and dedication to any project I work on.
                      
                      I am fascinated by biology (I have an MSc in Biodiversity) and in the parallels between the living world and the digital.
                      Machine learning being a prime example of tech mimicking nature. 
                      <br/><br/>
                      In addition to programming I am also a digital and traditional artist, I make 3D print files for sale <a target="_blank" href='https://allmylinks.com/ilexecoart?fbclid=IwY2xjawJKFvFleHRuA2FlbQIxMAABHaRr0-w0J75tbk_UMPYF57ZfcUsJbCVyRCXbaFf6x53MyW8Wnocz9oryoA_aem_OZIHcpefGNCGFmvoxwtcJQ'>(see them here)</a>.
                      What you do is more important than what you say so please check out my github to see my ongoing projects...  
                  </p>

                {/* project cards */}
                <motion.ul 
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration: 0.8, delay: 0.1}} 
                className='grid grid-col-1 sm:grid-cols-3 gap-6 max-w-3xl'>
                    {/* map de-structures the data from infoList */}
                    {/* the infoList is in the assets.js page in the assets folder */}
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li
                        whileHover={{scale:1.05}}
                        key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                         hover:bg-lightHover hover:-translate-y-1 duration-500 
                         hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-600 text-sm dark:text-white'>{title}</h3>
                            {/* using a dangerously set p tag as this tells React to render the description field as HTML code, rather than as a plain string. <br> tag inserted into the text.  */}
                            <p dangerouslySetInnerHTML={{ __html: description }} className='text-gray-600 text-sm dark:text-white/80' />
                            {/* commented out react p tag (that won't allow line breaks) */}
                            {/* <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p> */}
                        </motion.li>
                    ))}
                </motion.ul>
                
                {/* Tools I use section */}
                <motion.h4 
                            initial={{opacity:0, y: 20}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration: 0.5, delay: 1.3}} 
                className='my-6 text-gray-700 font-Ovo dark:text-white/80 font-bold'>Tools I Use:</motion.h4>
                    <motion.ul 
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{duration: 0.2, delay: 0.5}} className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index)=> (
                            <motion.li 
                            whileHover={{scale: 1.1}}
                            className='flex items-center justify-center
                            W-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500
                            ' 
                            key={index}>
                                <Image src={tool.icon} title={tool.title} alt='Tool' className='w-5 sm:w-7'/>
                            </motion.li>
                        ))}
                    </motion.ul>

            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default About