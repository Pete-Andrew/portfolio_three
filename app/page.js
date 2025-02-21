// 'use client' causes client side rendering
'use client'
import About from "./components/About";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

//holds the main bulk of the webpage
export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <About/>

    </>
  );
}
