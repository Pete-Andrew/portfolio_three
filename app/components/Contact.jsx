import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState} from 'react'

const Contact = () => {

  // this code is copied in from https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
  // uses web3forms

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const API_key = process.env.REACT_APP_API_KEY;
    // const API_Key = "Paste the API in here an it works"

    formData.append("access_key", API_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]
    bg-no-repeat bg-center bg-[length:90%_auto]
    dark:bg-none'>
      <h4 className='text-center mb-2 "text-1g font-Ovo' >
        Contact me</h4>
      <h2 className='text-center text-5x1 font-Ovo' >
        Get in touch</h2>

      <p className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
        Give me a shout yo, I'm waiting</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
            dark:bg-darkHover/30 dark:border-white/90' name='name' />
          <input type="email" placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
             dark:bg-darkHover/30 dark:border-white/90' name='email' />
        </div>
        <textarea rows='6' placeholder='Enter your message' required
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
           dark:bg-darkHover/30 dark:border-white/90' name='message'></textarea>
        <button type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
           text-white rounded-full mx-auto hover:bg-black duration-500
           dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit
          <Image src={assets.right_arrow_white} alt="right arrow" className='w-4' />
        </button>

        <p className='mt-4'>{result}</p>

      </form>
    </div>
  )
}

export default Contact

// bg-[url("/footer-bg-color.png")]