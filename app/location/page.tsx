"use client"
import React from 'react';
import Nav from '@/components/Nav1';
import NavLogin from '@/components/NavLogin';
import Footer from '@/components/Footer';
function MapContainer() {
    return (
        <>
            <Nav />
            <NavLogin />
            <section className='bg-gray-100 py-16'>

                <div className='container mx-auto text-center'>
                    <h1 className="text-5xl font-bold text-green-500 mb-10">
                        <span className="border-b-4 border-yellow-500 pb-2">จุดรับขยะ</span>
                    </h1>
                    <div className="relative w-full h-96">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.google.com/maps/d/u/0/embed?mid=1HqP4JLO_k4oWMeGlBUXLIBIofDeKdHM&ehbc=2E312F&noprof=1" title="Google Map"
                            aria-hidden="false"
                        >
                        </iframe>
                    </div>
                    <h2 className='text-xl font-semibold text-yellow-500 pt-5 pb-5'>เลือกจุดรับขยะใกล้บ้านคุณ</h2>
                    <p> <span className='text-green-600'>ปัจจุบัน</span>เรามีศูนย์รับขยะในกรุงเทพ และ ปริมณฑลมากกว่า 22 แห่ง โดยเราจะพัฒนาเพื่อขยายจุดรับขยะมากขึ้นเพื่อให้ทุกคนสะดวกสบายในการสะสมแต้มเพื่อแลกของรางวัลได้ง่ายขึ้นรวมถึงช่วยกันหยุดภาวะโลกรวนง่ายๆ ด้วยมือเรา</p>
                </div>
            </section>
            <Footer />
        </>

    );


}

export default MapContainer;
