"use client"

import Nav from '@/components/Nav1'
import React from 'react'

import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import config from '../../config';

interface CardProps {
    imageUrl: string;
    name: string;
    alt: string;  // Add this line
    describe: string;
    onClick: () => void;
}
interface Reward {
    id: number;
    imageUrl: string;
    title: string;
    describe: string;
    // Add any other properties if needed
}

export default function Page() {

    const [rewards, setRewards] = useState<Reward[]>([]);
    useEffect(() => {
        const URL_API = config.api_path + '/getProduct';

        axios.get(URL_API)
            .then(response => setRewards(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [showModal, setShowModal] = React.useState(false);


    return (
        <>
            <div className='shadow-xl shadow-gray-300'>
                <Nav />
            </div>
            <div className='mt-6'>
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl text-green-500 ">
                    <span className="text-3xl border-b-4 border-yellow-500 pb-2 sm:text-5xl">ของรางวัล</span>
                </h1>
            </div>
            <div className='container mx-auto mt-8 mb-8'>
                {rewards.length === 0 ? (
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">No Rewards Found</h1>
                        <p className="text-lg mb-4">Sorry, there are no rewards available at the moment.</p>
                        <Link href="/">
                            <p className="text-blue-500">Go back to home</p>
                        </Link>
                    </div>

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
                        {rewards.map(reward => (
                            <Card
                                key={reward.id} // Make sure to add a unique key when rendering a list of components
                                imageUrl={reward.imageUrl} // Use curly braces for dynamic values
                                name={reward.title}
                                describe={reward.describe}// Use curly braces for dynamic values
                                onClick={() => setShowModal(true)}
                            />

                        ))}
                    </div>
                )}
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            แลกของรางวัล
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <img src="/cointrashline.png" alt="" style={{ width: 400 }} />
                                        <p className="my-4 text-blueGray-500 text-xl font-bold text-center leading-relaxed">
                                            เพิ่มเพื่อนกับเราเพื่อนรับของรางวัล
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div >
            <Footer />
        </>

    );

}
