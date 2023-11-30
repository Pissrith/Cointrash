"use client"
import React from 'react'
import Dropdown from './Dropdown';
import { signOut, useSession } from 'next-auth/react';
import IconUser from './Icon/IconUser';
import IconLogout from './Icon/IconLogout';

function Navbar() {
    const { data: session } = useSession()
    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
    };

    if (session) {
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
                            <li><a href="/reward" className='text-black'>แลกของรางวัล</a></li>
                        </ul>
                        <div className="dropdown shrink-0 flex">
                            <Dropdown
                                offset={[0, 8]}
                                placement={'bottom-end'}
                                btnClassName="relative group block"
                                button={<img src={session.user?.image} className="flex justify-center items-center w-10 h-10 text-center rounded-full object-cover bg-red-500 text-base"></img>
                                }
                            >
                                <ul className="text-dark bg-white dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
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
            </nav>

        )
    }
}

export default Navbar