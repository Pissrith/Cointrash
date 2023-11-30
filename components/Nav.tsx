import React, { useState } from 'react'
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import '../styles/hovertext.css'; // Import your component-specific CSS file
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
    if (session) {



        return (
            <>
                <nav className='bg-dustyblue'>
                    <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
                            <div className='md:hidden flex items-center'>
                                <button
                                    className='inline-flex items-center justify-center p-2 rounded-md text-blue-500
                              hover:text-green-800 focus:outling-none focus:ring-2 focus:ring-inset focus:ring-white'
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
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <a href="/" className='text-green-800 text-2xl font-extrabold'>
                                        C<span className='text-yellow-900'>o</span>inCash
                                    </a>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className='hidden md:block'>
                                    <div className='ml-4 flex items-center space-x-4 font-bold'>
                                        <a href="" className='hover:text-green-600 link-hover rounded-lg p-2 '>
                                            แลกของรางวัล
                                        </a>
                                        <a href="" className='hover:text-green-600 link-hover  rounded-lg p-2'>
                                            ติดตามสถานะ
                                        </a>

                                        <a href="" className='hover:text-green-600 link-hover rounded-lg p-2'>
                                            แลกของรางวัล
                                        </a>

                                    </div>

                                </div>
                                <div className='py-5'>
                                    <div className="dropdown shrink-0 flex">
                                        <Dropdown
                                            offset={[0, 8]}
                                            placement={'bottom-end'}
                                            btnClassName="relative group block"
                                            button={<img src={session.user?.image} className="flex justify-center items-center w-10 h-10 text-center rounded-full object-cover bg-red-500 text-base"></img>
                                            }
                                        >
                                            <ul className="text-dark bg-transpare dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90 pr-5">
                                                <li>
                                                    <div className="flex items-center  py-4">
                                                        <div className="px-4 truncate">
                                                            <h4 className="text-base">
                                                                {session.user?.name}
                                                            </h4>
                                                            <button type="button" className="text-black/60  ">
                                                                {session.user?.email}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="border-t border-white-light dark:border-white-light/10 pl-3">
                                                    <button className="text-black !py-3 flex items-center space-x-1"
                                                        onClick={() => handleSignOut()}>
                                                        <IconUser className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2  shrink-0" />
                                                        <span>Profile</span>
                                                    </button>
                                                </li>

                                                <li className="border-t border-white-light dark:border-white-light/10 pl-3">
                                                    <button className="text-red-500 !py-3 flex items-center space-x-1"
                                                        onClick={() => handleSignOut()}>
                                                        <IconLogout className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                                                        <span>Sign Out</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                    {isClink && (
                        <div className='px-2 pt-2 pb-3 space-y- sm:-px-3 text-center'>
                            <a href="" className='text-black block hover:text-green-600  hover:bg-white  rounded-lg p-2'>
                                Home
                            </a>
                            <a href="" className='text-black block hover:text-green-600  hover:bg-white rounded-lg p-2'>
                                About
                            </a>
                            <a href="" className='text-black block hover:text-green-600  hover:bg-white  rounded-lg p-2'>
                                Service
                            </a>
                            <a href="" className='text-black block hover:text-green-600  hover:bg-white  rounded-lg p-2'>
                                Contact
                            </a>

                        </div>
                    )}
                </nav>


            </>
        )
    } else {
        return (
            <>
                <nav className='bg-transpare'>
                    <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
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
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <Link href="/" className='text-green-600 ml-10 text-2xl font-extrabold sm:ml-0'>
                                        C<span style={{ color: '#FFEE00' }}>o</span>inTrash
                                    </Link>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='hidden md:block'>
                                    <div className='ml-4 flex items-center space-x-4 font-bold'>
                                        <a href="" className='hover:text-green-600 link-hover rounded-lg p-2 '>
                                            หน้าหลัก
                                        </a>
                                        <a href="" className='hover:text-green-600 link-hover  rounded-lg p-2'>
                                            ความสำเร็จของเรา
                                        </a>
                                        <a href="" className='hover:text-green-600 link-hover rounded-lg p-2'>
                                            สาระการรีไซเคิล
                                        </a>
                                        <a href="" className='hover:text-green-600 link-hover rounded-lg p-2'>
                                            เกี่ยวกับเรา
                                        </a>

                                    </div>

                                </div>
                                <div className='pl-5'>
                                    <Link href="/auth/signin">
                                        <button className="cursor-pointer transition-all 
                                  bg-green-800 text-white px-6 py-2 rounded-lg
                                  border-heavygreen
                                  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-black shadow-green-300 active:shadow-none">
                                            ลงชื่อเข้าใช้
                                        </button>
                                    </Link >
                                </div>

                            </div>



                        </div>
                    </div>
                    {isClink && (
                        <div className='px-2 pt-2 pb-3 space-y- sm:-px-3 text-center bg-white rounded-xl '>
                            <a href="" className='hover:text-green-800 block  hover:font-semibold hover:bg-gray-100 text-black bg-white rounded-lg p-2'>
                                Home
                            </a>
                            <a href="" className='hover:text-green-800 hover:font-semibold block hover:bg-gray-100 text-black rounded-lg p-2'>
                                About
                            </a>
                            <a href="" className='hover:text-green-800 block  hover:font-semibold hover:bg-gray-100 text-black rounded-lg p-2'>
                                Service
                            </a>
                            <a href="" className='hover:text-green-800 block  hover:font-semibold hover:bg-gray-100 text-black rounded-lg p-2'>
                                Contact
                            </a>

                        </div>
                    )}
                </nav >

            </>
        )

    }
}
