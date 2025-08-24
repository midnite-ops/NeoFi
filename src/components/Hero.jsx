import play from '../assets/hero/play.svg';
import heroImg from '../assets/hero/hero-right-image.svg'
import Navbar from './Navbar';


function Hero(){
    return (
      <section className="flex flex-col h-screen md:h-[80vh] lg:h-screen xl:h-screen gap-8 md:gap-0">
        <Navbar />
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