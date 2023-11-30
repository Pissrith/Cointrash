import React from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
function Navbar() {
    const { data: session } = useSession()

    if (!session) {

        return (
            <nav className='bg-white-300 p-4'>
                <div className="contanier mx-auto flex justify-between items-center">
                    <a href="/" className='tex  t-black text-2xl font-semibold'>Cointrash</a>
                    <div className="contanier flex justify-between items-center">
                        <ul className='flex space-x-6 pr-6'>
                            <li><a href="/" className='text-black'>หน้าหลัก</a></li>
                            <li><a href="#" className='text-black'>ความสำเร็จของเรา</a></li>
                            <li><a href="/status" className='text-black'>สาระการรีไซเคิล</a></li>
                            <li><a href="/about" className='text-black'>เกี่ยวกับเรา</a></li>
                        </ul>
                        <Link href="/auth/signin">
                            <button className="bg-green-800 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                Apply Now
                            </button>
                        </Link >
                    </div>
                </div>

            </nav>
        )
    }
}

export default Navbar