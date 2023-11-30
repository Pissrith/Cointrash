"use client"

import NavLogin from '@/components/NavLogin'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

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
                <NavLogin />
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
        return notFound()
    }
}
