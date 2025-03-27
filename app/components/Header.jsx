//type rafce and the ES& extension will create an outline of this code
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
// see https://motion.dev/docs for motion info. 
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

            {/* Profile Image Container */}
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
  className="relative w-full flex flex-col items-center justify-center lg:mt-40 md:mt-20 sm:mt-2"
>

  {/* Wrapper to position images properly */}
  <div className="relative w-screen flex justify-center items-center">
    {/* Celtic Header as background */}
    <Image
      src={assets.celtic_header}
      alt=""
      className="w-full h-auto z-0"
    />

    {/* Pete Round in front (absolute center)
     w-[25vw] md:w-[17.5vw] lg:w-[13vw] in the below code set the size for the round image*/}
    <Image
      src={assets.pete_round}
      alt=""
      className="absolute 
      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      rounded-full 
      w-[25vw] md:w-[17.5vw] lg:w-[13vw] 
      z-10 border-8 border-slate-800 mb-10"
    />
  </div>

</motion.div>

        {/* image blurb/welcome */}
            <motion.h3 
            initial={{y: -20, opacity:0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration: 0.6, delay: 0.3}} 
            className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            >Hi I am Pete Andrew
            {/* <Image src={assets.hand_icon} alt='' className='w-6'/>  */}
            </motion.h3>

            <motion.h1
            initial={{y: -30, opacity:0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration: 0.8, delay: 0.5}}  
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo' >
                I am a Fullstack Developer from the UK. Interested in machine learning, game design and web development 
            </motion.h1>

            <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 0.6, delay: 0.7}} 
            className='max-w-2xl mx-auto font-Ovo'>
                Experienced front end web developer, currently working on front end and full stack projects @ <a href='https://www.livewellsouthwest.co.uk/'>Livewell Southwest</a>.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a 
                initial={{y: 30, opacity:0}}
                whileInView={{y: 0, opacity:1}}
                transition={{duration: 0.6, delay: 1}} 
                href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
                dark:bg-transparent'
                >Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

                <motion.a 
                initial={{y: 30, opacity:0}}
                whileInView={{y: 0, opacity:1}}
                transition={{duration: 0.6, delay: 1.2}} 
                href="/Peter_Andrew_CV_ 2025.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
                bg-white dark:text-black'
                > My CV <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
            </div>

        </div>
    )
}

export default Header
