import React, { useState } from 'react'
import FadeIn from '../components/FadeIn';
import Nav from './Nav';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import '../styles/hovertext.css'; // Import your component-specific CSS file
import IconLitecoin from './Icon/IconLitecoin';
import Dropdown from './Dropdown';
import IconUser from './Icon/IconUser';
import IconLogout from './Icon/IconLogout';
export default function Banner() {
    const heroImageUrl = 'https://project319pic.blob.core.windows.net/picforcs319/cointrarhcover1.png';
    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
    };
    const [isClink, setisClick] = useState(false);

    const toggleNavbar = (): void => {
        setisClick(!isClink);
    };
    const { data: session } = useSession()
    return (
        <div className='h-screen relative flex flex-col items-center'

            style={{
                background: `url(${heroImageUrl})`,
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div className='relative w-full m-w-[1490px] flex items-center justify-between pt-10 mx-auto '>
                <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
                    <Nav></Nav>
                </div>

            </div>
            <FadeIn delay={0.2} direction="down" padding fullWidth>
                <h1 className='mt-[150px] ml-10 text-white text-center xs:text-xl max-w-[500px]'>เคยคิดไหมว่าขยะที่เราตั้งใจแยก ได้ถูกนำไปใช้งานจริงหรือเปล่า?</h1>
            </FadeIn>
            <FadeIn delay={0.2} direction="down" padding fullWidth>
                <h1 className='mt-2 text-center text-7xl leading-tight xs:text-[64px] text-green-600 font-bold max-w-[1050px]'>C<span style={{ color: 'yellow' }}>o</span>inTrash
                </h1>
            </FadeIn>
            <FadeIn delay={0.2} direction="down" padding fullWidth>
                <h1 className='mt-1 text-white pl-12 xs:text-xl max-w-[500px]'>
                    <span className='pl-5'>โครงการช่วยสิ่งแวดล้อม
                    </span>ลดจำนวนขยะ ด้วยการเป็นตัวกลางนำรับขยะรีไซเคิลจากบ้านเรือนของคนไทยกลับมาใช้ใหม่โดยจะได้รับแต้มเพื่อใช้แลกของรางวัลเป็นสิ่งตอบแทน
                </h1>
            </FadeIn>

            <FadeIn delay={0.2} direction="down" padding fullWidth>
                <Link href='/exchange'>
                    <button className="group relative border-2 border-white mt-4 h-12 w-49 px-7 overflow-hidden rounded-lg bg-transpare text-lg shadow">
                        <div className="absolute inset-0 w-0  bg-green-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-white group-hover:text-white">แลกเปลี่ยนขยะรีไซเคิล</span>
                    </button>
                </Link>

            </FadeIn>
        </div>
    )
}   
