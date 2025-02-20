//type rafce and the ES& extension will create an outline of this code

import { assets } from '@/assets/assets'
// need to import Image for the images to display correctly
import Image from 'next/image' 
import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav>
                <a href="">
                    <Image src={assets.logo} className='w-28 
                    cursor-pointer mr-14'/>
                </a>

                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>

                <div>
                    <a href="#contact">Contact <Image src={assets.arrow_icon} className='w-3'/></a>
                </div>
            </nav>
        </>
    )
}

export default NavBar
