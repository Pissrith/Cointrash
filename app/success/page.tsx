"use client"
import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav1';
import Footer from '@/components/Footer';
import config from '@/config';
async function getData() {
    const res = await fetch(config.api_path + '/recycle');
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
    const [totalKg, setTotalKg] = useState<number>(0);
    const [recyclingData, setRecyclingData] = useState<SumRecycling | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();

                if (data && data.sumResult) {
                    setRecyclingData(data.sumResult);

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
                    const TotalKg =
                        plastic + aluminumCans + envelope + uht + glass + cardboard + otherPaper;
                    setTotalKg(TotalKg);


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
    }, []);

    const plastic = recyclingData?.plastic || 0;
    const aluminumCans = recyclingData?.aluminumCans || 0;
    const envelope = recyclingData?.envelope || 0;
    const uht = recyclingData?.uht || 0;
    const glass = recyclingData?.glass || 0;
    const cardboard = recyclingData?.cardboard || 0;
    const otherPaper = recyclingData?.otherPaper || 0;


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
            <main style={{ background: '#3F506C' }} className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-center text-lg  tracking-tighter sm:text-5xl text-green-500 ">
                        <span className=" border-b-4 border-yellow-500 pb-2 sm:text-lg text-lg md:text-4xl text-green-500">Recycling Statistics</span>
                    </h1>
                </div>
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                    <div className="rounded-lg border bg-white text-card-foreground shadow-sm" data-v0-t="card">
                        <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0 md:px-60 px-8 py-5 h-auto w-auto">
                            <h3 className="tracking-tight text-sm font-medium">Total Recycled Items</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            >
                                <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
                                <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
                                <path d="m14 16-3 3 3 3"></path>
                                <path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path>
                                <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path>
                                <path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-green-500 text-center mt-1  xl:mt-20">{totalKg} <span style={{ color: 'black' }}> Kg.</span></div>
                        </div>
                    </div>

                    <div className="rounded-lg border bg-white text-card-foreground shadow-sm flex flex-col " data-v0-t="card">
                        <div className="flex flex-col space-y-1.5 p-6 md:px-60 px-8 py-5 h-auto w-auto">
                            <p className="text-sm text-muted-foreground">Recycling Breakdown</p>
                        </div>
                        <div className="p-6 grid gap-4">
                            <div className="flex items-center">
                                <div>Plastic</div>
                                <div className="font-semibold ml-auto text-green-500">{plastic} <span style={{ color: 'black' }}> Kg.</span></div>
                            </div>
                            <div className="flex items-center">
                                <div>Aluminum Can</div>
                                <div className="font-semibold ml-auto text-green-500">{aluminumCans} <span style={{ color: 'black' }}> Kg.</span></div>
                            </div>
                            <div className="flex items-center">
                                <div>Envelope</div>
                                <div className="font-semibold ml-auto text-green-500">{envelope}<span style={{ color: 'black' }}> Kg.</span></div>
                            </div>
                            <div className="flex items-center">
                                <div>UHT Box</div>
                                <div className="font-semibold ml-auto text-green-500">{uht}<span style={{ color: 'black' }}> Kg.</span></div>
                            </div>
                            <div className="flex items-center">
                                <div>Glass</div>
                                <div className="font-semibold ml-auto text-green-500">{glass}<span style={{ color: 'black' }}> Kg.</span></div>
                            </div>
                            <div className="flex items-center ">
                                <div>Cardboard</div>
                                <div className="font-semibold ml-auto text-green-500">{cardboard}<span style={{ color: 'black' }}> Kg.</span></div>
                            </div>
                            <div className="flex items-center">
                                <div>Others Paper</div>
                                <div className="font-semibold ml-auto text-green-500">{otherPaper}<span style={{ color: 'black' }}> Kg.</span></div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
            <Footer />
        </>
    );
}
