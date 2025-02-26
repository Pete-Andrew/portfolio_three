//type rafce and the ES& extension will create an outline of this code

import { assets } from '@/assets/assets'
// need to import Image for the images to display correctly
import Image from 'next/image' 
import React, {useEffect, useRef, useState} from 'react'

const NavBar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    // open and close menu
    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }

    //is scrolling?
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>

        {/* white background hidden in dark mode */}
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
        {/* Dynamic template literal, if scroll is true then opacity gets added to the nav bar, adds empty sting if isScroll is false*/}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
            justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : "" }`}>

                {/* top left logo */}
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark: assets.logo} alt='' className='w-28 
                    cursor-pointer mr-14'/>
                </a>
                {/* classname made into a template literal, listens for isScroll if page is moving */}
                <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full 
                px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About Me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex item-center gap-4'>
                    
                    {/* onClick func switches between previous values for dark mode */}
                    <button onClick={()=> setIsDarkMode(prev => !prev)}>
                        {/* uses ternary to change icon */}
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6'/>
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
                    py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
                    dark:border-white/50'>Contact 
                    <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/></a>

                    {/* button for the hamburger menu, only visible on small screen */}
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/* mobile menu */}

                {/* ref={sideMenuRef links this menu to the close/open function} */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                    top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
                    dark:bg-darkHover dark:text-white'>
                    
                    <div className='absolute right-6 top-6 ' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default NavBar
