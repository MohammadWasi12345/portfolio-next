import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    return (
        <div id='Project'>
            <section className="text-teal-300 bg-gradient-to-r from-gray-800 to-emerald-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl italic text-2xl uppercase font-extrabold title-font mb-4 text-teal-100">
                            projects
                        </h1>
                        <p className="lg:w-2/3 mx-auto italic leading-relaxed text-base">
                            Discover the heart of my craft in the Projects section.
                            Explore, be inspired, and imagine the possibilities as we push the boundaries of digital innovation together.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"

                                    src={require('../../../public/assets/pictures/snake thumb.jpg')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">

                                    <h1 className="capitalize title-font text-lg font-extrabold text-teal-100 mb-3">
                                        snake game
                                    </h1>
                                    <p className="leading-relaxed capitalize">
                                        my learning project created using html css and typescript.here is the repo link. <br />
                                        <Link href="https://github.com/MohammadWasi12345/Snake-Hiss" target='_blank' className='text-blue-700'>click here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/assets/pictures/counterapp.jpeg')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">

                                    <h1 className=" capitalize title-font text-lg font-extrabold text-teal-100 mb-3">
                                        counter app
                                    </h1>
                                    <p className="leading-relaxed capitalize">
                                        my learning project created using html css and javacript.here is the repo link. <br />
                                        <Link href="https://github.com/MohammadWasi12345/counter-application" target='_blank' className='text-blue-700'>click here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/assets/pictures/calculator.jpg')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">

                                    <h1 className="capitalize title-font text-lg font-extrabold text-teal-100 mb-3">
                                        calculator
                                    </h1>
                                    <p className="leading-relaxed capitalize">
                                        my learning cli based project created using html css and typescript.here is the repo link. <br />
                                        <Link href="https://github.com/MohammadWasi12345/calculator-using-inquirer-library" target='_blank' className='text-blue-700'>click here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/assets/pictures/atmthumbnail.jpg')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">

                                    <h1 className="title-font text-lg font-extrabold text-teal-100 mb-3">
                                        ATM Machine
                                    </h1>
                                    <p className="leading-relaxed capitalize">
                                        my learning cli based project created using html css and typescript.here is the repo link. <br />
                                        <Link href="https://github.com/MohammadWasi12345/atm-machine" target='_blank' className='text-blue-700'>click here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/assets/pictures/currencyconvertorpng.png')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">

                                    <h1 className="title-font capitalize text-lg font-extrabold text-teal-100 mb-3">
                                        currency convertor app
                                    </h1>
                                    <p className="leading-relaxed capitalize">
                                        my learning cli based project created using html css and typescript.here is the repo link. <br />
                                        <Link href="https://github.com/MohammadWasi12345/currency_convertor_application" target='_blank' className='text-blue-700'>click here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require('../../../public/assets/pictures/next.png')}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">

                                    <h1 className="title-font capitalize text-lg font-extrabold text-teal-100 mb-3">
                                      real estate website
                                    </h1>
                                    <p className="leading-relaxed capitalize">
                                        my learning project created using  nextjs tailwindcss and shadcn UI.here is the  link. <br />
                                        <Link href="https://shaheer-estate.vercel.app/" target='_blank' className='text-blue-700'>click here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projects