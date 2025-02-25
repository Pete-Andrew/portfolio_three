// 'use client' causes client side rendering
'use client'
import About from "./components/About";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Services from  "./components/Services"
import Work from "./components/Work";
import Contact from "./components/Contact";

//holds the main bulk of the webpage
//Mounts all the pages
export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    

    </>
  );
}
