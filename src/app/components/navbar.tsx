import React from 'react';
import Link from 'next/link';
import { MdDownload } from "react-icons/md";
import Image from 'next/image';


const Navbar = () => {
    return (

        <div className='z-50 sticky top-0'>
            <header className="text-amber-300 italic body-font bg-gradient-to-r from-gray-800 to-emerald-900">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-amber-400 mb-4 md:mb-0">
                        <Image
                            alt='logo'
                            height={100}
                            width={100}
                            src={require("../../../public/assets/pictures/logo.png")}
                            className='w-12 rounded-xl' />
                        <span className="ml-3 text-xl text-amber-400 font-extrabold tracking-widest">My Portfolio</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"#Home"} className="mr-5 hover:text-amber-500">Home</Link>
                        <Link href={"#Skills"} className="mr-5 hover:text-amber-500">Skills</Link>
                        <Link href={"#Project"} className="mr-5 hover:text-amber-500">Projects</Link>
                        <Link href={"#Contact"} className="mr-5 hover:text-amber-500">Contact</Link>
                    </nav>
                    <a href='/assets/cv.pdf'>
                    <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-700 rounded text-base mt-4 md:mt-0">
                        Download CV
                        <MdDownload  className='ml-2'/>

                    </button>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Navbar