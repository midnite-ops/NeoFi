import { useState } from 'react';
import neofi from '../assets/hero/neo-logo.svg';
import play from '../assets/hero/play.svg';
import heroImg from '../assets/hero/hero-right-image.svg'
import menu from '../assets/menu.svg';

function Hero(){
    const [active, setActive] = useState('Home')
    function handleClick(value){
        setActive(value)
    }
    const navLinks = ['Home', 'Features', 'Testimonial', 'FAQ']
    return (
      <section className="flex flex-col h-screen md:h-[80vh] lg:h-screen xl:h-screen gap-8 md:gap-0">
        <nav className="flex justify-between items-center" id="navbar">
          <div className="flex space-x-5 items-center">
            <img src={neofi} className="w-[32px]" alt="a neofi logo" />
            <h1 className="font-medium text-[22px]">NeoFi</h1>
          </div>
            <div className='lg:hidden'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 text-white hover:cursor-pointer" // Tailwind controls color + size
                    fill="currentColor"
                    >
                    <path d="M5,7h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5C4.4,5,4,5.4,4,6S4.4,7,5,7z" />
                    <path d="M5,13h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1,0.4-1,1S4.4,13,5,13z" />
                    <path d="M5,19h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H5c-0.6,0-1,0.4-1,1S4.4,19,5,19z" />
                </svg>
            </div>
          <div className="hidden lg:flex">
            <ul className="flex space-x-10 items-center">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={`font-alex text-gray-500 hover:cursor-pointer text-[16px] ${
                    active === item ? "text-white" : ""
                  }`}
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-5 items-center hidden lg:flex">
            <p>Log in</p>
            <button>Try For Free</button>
          </div>
        </nav>

        <section
          className="flex-col flex md:flex-row md:py-0 py-10 gap-20 md:gap-0 flex-1 items-center"
          id="hero"
        >
            <div className="flex-2 w-full items-center md:items-start flex space-y-10 flex-col">
                <div className="flex flex-col items-center md:items-start space-y-6">
                    <div className="border-btn flex items-center space-x-2 px-3 py-2.5">
                        <div className="rounded-full h-2 w-2 bg-green"></div>
                        <p className="text-green text-sm">Decentralized</p>
                    </div>
                    <h1 className="lg:w-[661px] font-bold lg:text-[64px] text-[40px] md:text-start">
                        Revolutionizing
                        <br /> Web3 Finance
                    </h1>
                    <p className="text-center md:text-start font-inter font-light text-grayT w-[70%] text-[16px] md:text-lg lg:text-[20px]">
                        Secure, scalable and decentralized solutions for your digital
                        assets-experience the future of digital freedom.
                    </p>
                </div>

                <div className="flex space-x-5 w-fit">
                    <button className="py-3.5 px-6">Get Started</button>
                    <button className="py-3.5 px-6 bg-transparent border text-white flex items-center">
                        <img src={play} className="mr-1.5" alt="a play icon" />
                        Watch Video
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <img src={heroImg} className="w-[300px] md:w-full" alt="" />
            </div>
        </section>
      </section>
    );
}

export default Hero