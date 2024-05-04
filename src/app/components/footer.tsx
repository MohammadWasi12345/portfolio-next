import React from 'react';
import Link from 'next/link';

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font italic bg-gradient-to-r from-gray-800 to-emerald-900">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                        <span className="ml-3 text-xl text-amber-400 font-extrabold">My Portfolio</span>
                    </a>
                    <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 My Portfolio —
                        <Link target='_blank' href={"www.linkedin.com/in/mohammad-wasi-86a13b253"} className="text-gray-600 ml-1" rel="noopener noreferrer">@Mohammadwasi</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link target='_blank' href={''} className="text-gray-900">
                            
                            <FaFacebookF />
                        </Link>
                        <Link target='_blank' href={"https://www.linkedin.com/in/mohammad-wasi-86a13b253/"} className="ml-3 text-gray-900">
                            <FaLinkedinIn />
                        </Link>
                        <Link target='_blank' href={'https://github.com/MohammadWasi12345'} className="ml-3 text-gray-900">
                            <FaGithub />
                        </Link>
                        <Link target='_blank' href={''} className="ml-3 text-gray-900">
                            <MdOutlineEmail />
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer