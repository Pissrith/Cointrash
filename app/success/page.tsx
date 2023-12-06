"use client"
import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav1';
import Footer from '@/components/Footer';

async function getData() {
    const res = await fetch('http://localhost:3004/recycle');
    return res.json();
}

interface SumRecycling {
    plastic: number;
    aluminumCans: number;
    envelope: number;
    uht: number;
    glass: number;
    cardboard: number;
    otherPaper: number;
}

export default function Page() {
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();

                if (data && data.sumResult) {
                    const { plastic, aluminumCans, envelope, uht, glass, cardboard, otherPaper } = data.sumResult;

                    // Define the multiplier for each recycling item
                    const multiplier = {
                        plastic: 1.04,
                        aluminumCans: 9.13,
                        envelope: 3.55,
                        uht: 4.08,
                        glass: 0.28,
                        cardboard: 3.14,
                        otherPaper: 2.1,
                    };

                    // Calculate the total
                    const calculatedTotal =
                        (plastic || 0) * multiplier.plastic +
                        (aluminumCans || 0) * multiplier.aluminumCans +
                        (envelope || 0) * multiplier.envelope +
                        (uht || 0) * multiplier.uht +
                        (glass || 0) * multiplier.glass +
                        (cardboard || 0) * multiplier.cardboard +
                        (otherPaper || 0) * multiplier.otherPaper;

                    setTotal(calculatedTotal);
                } else {
                    console.error('Data or data.sum is undefined.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect once when the component mounts

    return (
        <>
            <div className="shadow-xl shadow-gray-300">
                <Nav />
            </div>
            <div style={{ background: '#3F506C' }}>
                <div className="flex flex-col w-auto h-screen text-center items-center justify-center">
                    <img
                        src="https://project319pic.blob.core.windows.net/picforcs319/gbFhstyENyECIgU6kaqa8.jpg"
                        alt="sss"
                        className="text-center h-64 w-auto mx-auto pt-30"
                    />
                    <div className="bg-white mx-auto flex flex-col rounded-xl shadow-2xl shadow-green-200 md:px-60 px-8 py-5 h-auto w-auto">
                        <h2 className="text-5xl font-bold text-green-500 md:text-7xl">{total}</h2>
                        <hr className="mt-4 h-1 bg-gray-300 border-0 rounded dark:bg-gray-700" />
                        <p className="mt-2 md:text-2xl text-black">ปริมาณการลดการปล่อยก๊าซเรือนกระจก (kgCO2e)ที่เราทำได้</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
