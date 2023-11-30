"use client"
import React, { useState } from 'react'
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import '../styles/navbar.css'; // Import your component-specific CSS file
import IconLitecoin from './Icon/IconLitecoin';
import Dropdown from './Dropdown';
import IconUser from './Icon/IconUser';
import IconLogout from './Icon/IconLogout';
export default function Nav() {
    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
    };
    const [isClink, setisClick] = useState(false);

    const toggleNavbar = (): void => {
        setisClick(!isClink);
    };
    const { data: session } = useSession()
    if (!session) {
        return (
            <>
                <nav className='bg-transpare shadow-2xl'>
                    <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <Link href="/" className='text-green-600  text-2xl font-extrabold sm:ml-0'>
                                        C<span style={{ color: '#FFEE00' }}>o</span>inTrash
                                    </Link>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='hidden md:block'>
                                    <div className='ml-4 flex items-center space-x-4 font-bold'>
                                        <Link href="/" style={{ color: 'white;' }} className='hover:text-green-600 link-hover rounded-lg  p-2 '>
                                            หน้าหลัก
                                        </Link>
                                        <Link href="/success" style={{ color: 'white;' }} className='hover:text-green-600 link-hover  rounded-lg p-2'>
                                            ความสำเร็จของเรา
                                        </Link>
                                        <Link href="/location" style={{ color: 'white;' }} className='hover:text-green-600 link-hover rounded-lg p-2'>
                                            จุดรับขยะ
                                        </Link>
                                        <Link href="" style={{ color: 'white;' }} className='hover:text-green-600 link-hover rounded-lg p-2'>
                                            แลกคะแนน
                                        </Link>
                                        <Link href="" style={{ color: 'white;' }} className='hover:text-green-600 link-hover rounded-lg p-2'>
                                            สินค้า
                                        </Link>
                                        <Link href="" style={{ color: 'white;' }} className='hover:text-green-600 link-hover rounded-lg p-2'>
                                            เกี่ยวกับเรา
                                        </Link>

                                    </div>

                                </div>
                            </div>
                            <div className='md:hidden flex items-center'>
                                <button
                                    className='inline-flex items-center text-green-600 justify-center p-2 rounded-md black
                              hover:text-white focus:outling-none focus:ring-2 focus:ring-inset '
                                    onClick={toggleNavbar}>
                                    {isClink ? (
                                        <svg className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor" >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>

                                    )}

                                </button>
                            </div>



                        </div>
                    </div>
                    {isClink && (
                        <div className='px-2 pt-2 pb-3 space-y- sm:-px-3 text-center bg-white rounded-xl '>
                            <Link href="" className='hover:text-green-800 block  hover:font-semibold hover:bg-gray-100 text-black bg-white rounded-lg p-2'>
                                Home
                            </Link>
                            <Link href="" className='hover:text-green-800 hover:font-semibold block hover:bg-gray-100 text-black rounded-lg p-2'>
                                About
                            </Link>
                            <Link href="" className='hover:text-green-800 block  hover:font-semibold hover:bg-gray-100 text-black rounded-lg p-2'>
                                Service
                            </Link>
                            <Link href="" className='hover:text-green-800 block  hover:font-semibold hover:bg-gray-100 text-black rounded-lg p-2'>
                                Contact
                            </Link>

                        </div>
                    )}
                </nav >

            </>
        )

    }
}
