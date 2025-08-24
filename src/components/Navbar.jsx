import { MenuIcon } from 'lucide-react';
import neofi from '../assets/hero/neo-logo.svg';
import { SidebarTrigger } from './ui/sidebar';
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
             <SidebarTrigger className='bg-transparent text-white lg:hidden '>
                <MenuIcon className='h-4 w-4'/>
             </SidebarTrigger>
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
                        <a href={`#${item}`}>
                            {item}
                        </a>
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