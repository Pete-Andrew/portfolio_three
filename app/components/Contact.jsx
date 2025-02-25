import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const Contact = () => {
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]
    bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 "text-1g font-Ovo' >
        Contact me</h4>
      <h2 className='text-center text-5x1 font-Ovo' >
        Get in touch</h2>

      <p className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
        Give me a shout yo, I'm waiting</p>

      <form className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
          <input type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
        </div>
        <textarea rows='6' placeholder='Enter your message' required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
        <button type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
           text-white rounded-full mx-auto hover:bg-black duration-500'>Submit
          <Image src={assets.right_arrow_white} alt="right arrow" className='w-4' />
        </button>
        
        <p className='mt-4'>Sending...</p>

      </form>
    </div>
  )
}

export default Contact

// bg-[url("/footer-bg-color.png")]