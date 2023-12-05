"use client"
import React from 'react'
import Nav from '@/components/Nav1'
import NavLogin from '@/components/NavLogin'

import Footer from '@/components/Footer'
export default function page() {
    return (
        <>
            <div className='shadow-xl shadow-gray-300'>
                <Nav />
            </div>
            <div style={{ background: '#3F506C' }} >
                <div className='flex flex-col w-auto h-screen text-center items-center justify-center'>
                    <img src="https://project319pic.blob.core.windows.net/picforcs319/gbFhstyENyECIgU6kaqa8.jpg" alt="sss"
                        className='text-center h-64 w-auto mx-auto pt-30' />
                    <div className='bg-white mx-auto flex flex-col rounded-xl shadow-2xl shadow-green-200  md:px-60 px-8 py-5 h-auto w-auto'>
                        <h2 className='text-5xl font-bold text-green-500 md:text-7xl'>398,029.23</h2>
                        <hr className='mt-4 h-1 bg-gray-300 border-0 rounded dark:bg-gray-700' />
                        <p className='mt-2 md:text-2xl text-black'>ปริมาณการลดการปล่อยก๊าซเรือนกระจก (kgCO2e)ที่เราทำได้</p>
                    </div>
                </div>
                <p className='text-end text-xs text-white'>ข้อมูล ณ วันที่ xx xx xxxx</p>
            </div >
            <Footer />
        </>
    )
}
