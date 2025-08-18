import { useState } from 'react';
import neofi from '../assets/hero/neo-logo.svg';
import play from '../assets/hero/play.svg';
import heroImg from '../assets/hero/hero-right-image.svg'
function Hero(){
    const [active, setActive] = useState('Home')
    function handleClick(value){
        setActive(value)
    }
    const navLinks = ['Home', 'Features', 'Testimonial', 'FAQ']
    return(
        <section className='flex flex-col h-screen'>
            <nav className="flex justify-between items-center" id='navbar'>
                <div className='flex space-x-5 items-center'>
                    <img src={neofi} className='w-[32px]' alt="a neofi logo" />
                    <h1 className='font-medium text-[22px]'>NeoFi</h1>
                </div>
                <div>
                    <ul className='flex space-x-10 items-center'>
                        {navLinks.map((item, index) => (
                            <li key={index} className={`font-alex text-gray-500 hover:cursor-pointer ${active === item ? 'text-white' : ''}`} onClick={() => {handleClick(item)}}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex space-x-5 items-center'>
                    <p>Log in</p>
                    <button>Try For Free</button>
                </div>
            </nav>

            <section className="flex-col flex lg:flex-row justify-between flex-1 items-center" id='hero'>
                <div className='flex-2 w-full flex space-y-10 flex-col'>
                    <div className='flex flex-col space-y-6'>
                        <div className='border-btn flex items-center space-x-2 px-3 py-2.5'>
                            <div className='rounded-full h-2 w-2 bg-green'></div>
                            <p className='text-green text-sm'>Decentralized</p>
                        </div>
                        <h1 className='lg:w-[661px] font-bold text-[64px] text-start'>Revolutionizing<br/> Web3 Finance</h1>
                        <p className='text-start font-inter text-[20px] font-light text-grayT w-[583px]'>
                            Secure, scalable and decentralized solutions for your digital assets-experience the future of digital freedom.
                        </p>
                    </div>
                    
                    <div className='flex space-x-5 w-fit'>
                        <button className='py-3.5 px-6'>Get Started</button>
                        <button className='py-3.5 px-6 bg-transparent border text-white flex'>
                            <img src={play} className='mr-1.5' alt="a play icon" />
                            Watch Video
                        </button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={heroImg} className='w-full' alt="" />
                </div>
            </section>
        </section>
        
    )
}

export default Hero