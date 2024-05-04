'use client';
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
    return (
        <div id='Home'>


            <section className="text-gray-600 body-font bg-gradient-to-r from-gray-800 to-emerald-900">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-teal-100 italic">
                            I AM
                            <br className="hidden lg:inline-block" />
                            <Typewriter 
                                options={{
                                    strings: ['MOHAMMAD WASI', 'WEB DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </h1>
                        <p className="mb-8 leading-relaxed text-teal-300 italic">
                        Welcome to my digital playground! As a passionate frontend developer, I sculpt pixels into captivating user experiences. Dive into my portfolio to explore a symphony of code and creativity, where every project tells a story of innovation and design.
                         From sleek interfaces to seamless interactions, join me on a journey through the ever-evolving landscape of web development. Lets shape the future, one line of code at a time
                        </p>
                        <div className="flex justify-center italic">
                            <Link href={'#Contact'}>
                            <button className="inline-flex text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
                                Contact
                            </button>
                            </Link>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/3">
                        <Image
                            className="object-cover object-center rounded-full w-[16rem] mx-auto"
                            alt="hero"
                            src={require('../../../public/assets/pictures/hero.jpg')}
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Hero