//type rafce and the ES& extension will create an outline of this code
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </div>

            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            >Hi I am Pete Andrew <Image src={assets.hand_icon} alt='' className='w-6'/> </h3>

            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo' >
                Fullstack Developer based in London. Or at least that is what I tell people, it's a lie but I like it </h1>

            <p className='max-w-2xl mx-auto font-Ovo'>
                Front end web developer, all round legend. Some other words here to fill in the gaps and make it seem
                like I am more important then I am.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
                dark:bg-transparent'
                >Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

                <a href="#sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
                bg-white dark:text-black'
                > My CV <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>

        </div>
    )
}

export default Header
