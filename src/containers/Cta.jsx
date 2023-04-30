import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Cta = ({ setSelectedPage }) => {
    return (
        <div className='w-full mt-24 p-4 md:p-8 flex flex-col md:flex-row items-center justify-between border-[0.1rem] border-light rounded-md shadow-xl shadow-black'>
            <div className='w-full md:w-4/5 text-center md:text-left text-sm leading-4 md:text-3xl font-playfair text-transparent bg-clip-text bg-gradient-rainblue '>
                I’m always open to discussing project work, Interested in collaborating with me?
            </div>
            <AnchorLink
                className="rounded-md shadow-md shadow-black bg-gradient-rainblue mt-3 md:mt-0 py-0.5 px-0.5"
                onClick={() => setSelectedPage("contact")}
                href="#contact">
                <div className="bg-dark hover:scale-90 shadow-lg shadow-black transition duration-500 w-full h-full px-2 md:px-10 py-2 md:py-4 font-playfair rounded-md text-xs md:text-base ">Let's talk.</div>
            </AnchorLink>
        </div>
    )
}

export default Cta
