import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            peter.a.andrew@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t
         border-gray-400 mx-[10%] mt-12 py-6'>
            <p> © Pete Andrew 2025. All rights reserved </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    {/* _blank opens target window in new tab */}
                    <li><a target="_blank" href="https://github.com/Pete-Andrew">GitHub</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/peter-a-2143b33a/">LinkedIn</a></li>
                    <li><a target="_blank" href="https://github.com/Pete-Andrew">Other</a></li>
                </ul>
        </div>
    </div>
  )
}

export default Footer