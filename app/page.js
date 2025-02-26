// 'use client' causes client side rendering
'use client'
import About from "./components/About";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Services from  "./components/Services"
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useState } from "react";

//holds the main bulk of the webpage
//Mounts all the pages
export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  // adds light/dark mode to local storage
  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) 
      && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])


  useEffect(()=>{
    // if darkMode is true/false classList of 'dark' is added or removed. 
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = ''
    }
  },[isDarkMode])

  return (
    <>
    {/* can access setIsDarkMode in nav bar */}
    <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    

    </>
  );
}
