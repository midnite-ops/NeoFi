import icon1 from '../assets/features/icon-1.svg'
import shape from '../assets/features/shape-1.svg'
function Features(){
    const feature = {
        breakDown: [
            {
				title: 'Scalability',
				subtitle: 'Adapt and grow, no matter the demand',
				img: icon1
			},
			{
				title: 'Decentralization',
				subtitle: 'Decentralization, Web3 aims to give power to the people, a centralized hub',
				img: icon1
			},
			{
				title: 'Connectivity',
				subtitle: 'Computers will be able to understand information similar to humans',
				img: icon1
			}
        ],

		technology: [
			{
				title: 'Connectivity and ubiquity',
				subtitle: 'Connectivity and ubiquity. the focal points of Web 3.0 emphasize connectivity and ubiquity ensuring seamless interaction between users and devices',
				img: icon1
			},
			{
				title: 'Secure Transaction',
				subtitle: 'Ensuring every transaction is protected with cutting-edge security, giving you the confidence to exchange, invest, and grow in a safe and trusted environment.',
				img: icon1
			},
			{
				title: 'Blockchain and decentralization',
				subtitle: 'Most important of all, the assurance of blockchain and decentralization helps in encouraging communication between software and browser plugins.',
				img: icon1
			}
		]
    }
    return(
        <>
            <section className="box">
                <div className="center">
                    <div className='text-center'>
						<div className="border-btn">Features</div>
					</div>
                    <h1>Future Breakdown</h1>
                    <p className="gray-text">
                        Secure, scalable and decentralized solutions for your digital assets-experience the future of digital freedom.
                    </p>
                </div>
                <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-6">
                    {feature.breakDown.map((item, index) => (
                        <div key={index} className="py-12 px-9 border border-grayBorder rounded-xl flex flex-col items-center space-y-9">
                            <img src={item.img} className='w-10' alt={item.title} />
                            <div>
                                <h3 className='mb-4 font-inter text-xl'>{item.title}</h3>
                                <p className='text-grayT'>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            <section className='box bg-gray -mx-[114px] relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]'>
                <div className="center">
                    <div className='text-center'>
						<div className="border-btn">Statistics</div>
					</div>
                    <h1>Completely Leverage Product</h1>
                    <p className="gray-text">
                        Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology.
                    </p>
                </div>
                <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6">
                    <div className='flex flex-col items-center space-y-5'>
                        <h3 className='font-alex text-5xl text-green'>2M+</h3>
                        <p className='text-xl text-grayT font-inter font-light'>Users</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                        <h3 className='font-alex text-5xl text-green'>500K+</h3>
                        <p className='text-xl text-grayT font-inter font-light'>Transactions</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                        <h3 className='font-alex text-5xl text-green'>35+</h3>
                        <p className='text-xl text-grayT font-inter font-light'>Countries</p>
                    </div>
                </div>
            </section>


            <section className='box'>
                <div className="center">
                    <div className='text-center'>
						<div className="border-btn">Future</div>
					</div>
                    <h1>The Future Of Blockchain Technology</h1>
                    <p className="gray-text">
                        Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology.
                    </p>
                </div>

                <div className='flex lg:space-x-[72px] space-y-[72px] lg:flex-row flex-col items-center'>
                    <div className='flex-1'>
                        <img src={shape} alt="a shape" />
                    </div>
                    <div className='grid grid-rows-3 flex-1 gap-10'>
                        {feature.technology.map((item, index) => (
                        <div key={index} className="py-7.5 px-5 border border-grayBorder rounded-[20px] flex items-start space-x-6">
                            <img src={item.img} className='w-10' alt={item.title} />
                            <div>
                                <h3 className='mb-4 text-start font-inter text-xl'>{item.title}</h3>
                                <p className='text-grayT text-start'>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default Features