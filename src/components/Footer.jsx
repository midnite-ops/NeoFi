import neofi from '../assets/hero/neo-logo.svg';
import arrow from '../assets/right-arrow.svg'
function Footer(){
    return(
        <footer className="pt-20 flex center py-10 w-full">
            <div className='flex w-full py-10 gap-[126px]'>
                <div className="flex items-start flex-2 gap-[92px] ">
                    <div className='flex space-x-5 items-center'>
                        <img src={neofi} className='w-[32px]' alt="a neofi logo" />
                        <h1 className='font-medium text-[22px]'>NeoFi</h1>
                    </div>
                    <div>
                        <h3 className='text-start mb-6 font-inter text-xl'>Quick Links</h3>
                        <ul className='flex flex-col gap-2'>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Community</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-start mb-6 font-inter text-xl'>Help</h3>
                        <ul className='flex flex-col gap-2'>
                            <li>Help Center</li>
                            <li>FAQ</li>
                            <li>Forum</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-start mb-6 font-inter text-xl'>Social Media</h3>
                        <ul className='flex flex-col gap-2'>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
                <div className='flex-1 flex flex-col'>
                    <div className='flex-1'>
                        <h3 className='font-inter text-xl w-fit text-start'>Join our mailing list <br/>for updates</h3>
                    </div>
                    <div className='text-start flex-1'>
                        <div className='flex justify-between items-start border-b border-b-grayT pb-4'>
                            <label htmlFor="email">
                                <input type="email" className='font-alex text-sm border-none outline-none' placeholder='Your email address'/>
                            </label>
                            <div className='w-10 h-10 bg-green rounded-full hover:cursor-pointer flex items-center justify-center'>
                                <img src={arrow} alt="an arrow icon" />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="text-center py-10">
                <p className="font-extralight text-xs">
                    © 2025. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer