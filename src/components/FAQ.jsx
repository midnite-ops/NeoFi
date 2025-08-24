import { Accordion,AccordionContent, AccordionItem,AccordionTrigger } from "@/components/ui/accordion"
function FAQ(){
    const faq = ['What is NeoFi and how does it work', 'How is Blockchain related to cryptocurrency?', 'Is Blockchain technology secure?', 'How does Blockchain enhance security?', 'Can BlockChain be hacked?', 'How can i implement Blockchain in my industry?']
    return(
        <>
            <section id="FAQ" className="box">
                <div className="center">
                    <div className='text-center'>
                        <div className="border-btn">FAQ</div>
                    </div>
                    <h1>Get Answers To Common Questions</h1>
                    <p className="gray-text ">
                    From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking
                    </p>
                </div>

                <Accordion
                type="single"
                collapsible
                className="w-full md:w-[70%] flex flex-col gap-7.5 justify-center"
                defaultValue="">
                    {faq.map((item, index) => (
                        <AccordionItem key={index} value={`item ${index}`} className='py-4 px-5 border! border-grayT rounded-sm'>
                            <AccordionTrigger className='bg-transparent text-white hover:no-underline'>{item}</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4 px-6 flex-start">
                                    <p className="text-start">
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                    <p className="text-start">
                                        Key features include advanced processing capabilities, and an
                                        intuitive user interface designed for both beginners and experts.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>  
                    ))}
                </Accordion>
            </section>


            <section className="box bg-gray relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]">
                <div className="center">
                    <div className='text-center'>
						<div className="border-btn">Revolutionary</div>
					</div>
                    <h1>
                       Be Part Of NeoFi And Connect With Like Minds
                    </h1>
                    <p className="gray-text ">
                        Join a thriving community committed to safeguarding digital assets, empowering your financial journey with trust, innovation, and security
                    </p>
                    <button className="mt-2.5 self-center">Get Started</button>
                </div>
            </section>
        </>
        
    )
}
export default FAQ