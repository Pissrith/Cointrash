"use client"

import Navbar from '@/components/Navbar2'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import NotFound404 from '@/components/pages/NotFound404'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card'
import Footer from '@/components/Footer'
export default function Page() {

    const [rewards, setRewards] = useState([]);
    useEffect(() => {
        // แก้ไข URL_API เป็น URL จริงของ API ที่ท่านใช้
        const URL_API = ' https://www.melivecode.com/api/attractions';

        axios.get(URL_API)
            .then(response => setRewards(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const { data: session } = useSession()
    if (session) {


        return (
            <>
                <Navbar />
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {rewards.map(reward => (
                                <Card
                                    key={reward.id} // Make sure to add a unique key when rendering a list of components
                                    imageUrl={reward.coverimage} // Use curly braces for dynamic values
                                    name={reward.name}
                                    describe={"change your profile picter"}// Use curly braces for dynamic values
                                    points={100}
                                />

                            ))}
                        </div>
                    )}

                </div >
                <Footer />
            </>

        );
    } else {
        return (
            <>
                <div className='flex flex-wrap justify-center mt-8'>
                    <div className='h-fit group relative'>
                        <img src="https://i.guim.co.uk/img/media/5f1155a189f9682073c34bc64e2915a65a0b8cf8/0_186_5936_3561/master/5936.jpg?width=465&dpr=1&s=none"
                            alt="asd"
                            className="rounded-full w-48 h-48 object-cover mx-auto"
                        />
                        <div className="rounded-full inset-0 absolute h-48 w-48 bg-black/20 flex items-center justify-center  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                            <button className="bg-black rounded-xl text-white py-2 px-5">อ่านต่อ</button>
                        </div>

                    </div >
                </div >
                <div className="h-fit group">
                    <div className="relative overflow-hidden">
                        <img
                            src="https://i.guim.co.uk/img/media/5f1155a189f9682073c34bc64e2915a65a0b8cf8/0_186_5936_3561/master/5936.jpg?width=465&dpr=1&s=none"
                            alt="asd"
                            className="object-cover w-full h-48"
                        />
                        <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10  group-hover:opacity-100 transition-all duration-300 text-center">
                            <button className="bg-black text-white py-2 px-5">Add to cart</button>                        </div>
                    </div>
                </div>
            </>

        )
    }
}
