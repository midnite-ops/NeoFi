import logo1 from '../assets/partners/1.svg';
import logo2 from '../assets/partners/2.svg';
import logo3 from '../assets/partners/3.svg';
import logo4 from '../assets/partners/4.svg';
function Partners(){
    const partners = [
        {
            title: 'Logoipsum',
            img: logo1
        },
        {
            title: 'Logoipsum',
            img: logo2
        },
        {
            title: 'Logoipsum',
            img: logo3
        },
        {
            title: 'Logoipsum',
            img: logo4
        }
    ]
    return(
        <section id="partners" className="bg-gray py-10 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] flex flex-col items-center space-y-10">
            <div>
                <p>
                    Satisfied Partners
                </p>
            </div>
            <div className='flex gap-[72px] gap-y-4 flex-wrap items-center justify-center'>
                {partners.map((partner, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                        <img src={partner.img} alt="logo" />
                        <p>{partner.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Partners