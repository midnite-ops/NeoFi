import neofi from '../assets/hero/neo-logo.svg';
import { useState } from 'react';
function Navbar(){
    const [active, setActive] = useState('Home')
    function handleClick(value){
        setActive(value)
    }
    const navLinks = ['Home', 'Features', 'Testimonial', 'FAQ']
    return(
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
    )
}

export default Navbar