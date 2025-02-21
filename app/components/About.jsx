import { assets, infoList } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Intro</h4>
        <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className ='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>Some words to make me look like the big daddy of programming</p>

                <ul className='grid grid-col-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {/* map de-structures the data from infoList */}
                    {/* the infoList is in the assets.js page in the assets folder */}
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-600 text-sm'>{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    </div>
  )
}

export default About