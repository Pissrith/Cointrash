// Your existing code
import React from 'react';
import Herowithpic from '@/components/Herowithpic';
import DynamicComponent from '@/components/Herowithpicleft';
import Nav from '@/components/Nav1';
import Footer from '@/components/Footer';

export default function Page() {
    return (
        <>
            <div className='shadow-xl shadow-gray-300'>
                <Nav />
            </div>

            <div className='mx-10'>
                <Herowithpic
                    imgSrc="/COINCASH.png"
                    heading="แยกขยะ"
                    paragraph="แยกขยะใส่ถุงแต่ละประเภทให้ถูกต้อง ไม่ใส่ขยะต้องห้ามเช่น เศษแก้ว ไม้แหลม "
                />
                <div className='bg-green-100 '>

                    <DynamicComponent
                        imgSrc="/COINCASH.png"
                        altText="About us"
                        heading="นำขยะไปส่งยังจุดรับ"
                        paragraph="นำขยะที่แยกแล้วนำไปส่งยังจุดรับขยะใกล้บ้านคุณ จากนั้นใช้เทปที่จุดรับแปะถุงขยะเพื่อเขียนชื่อสมาชิก และ ส่งมอยให้พนักงาน"
                    />
                </div>
                <Herowithpic
                    imgSrc="/COINCASH.png"
                    heading="เพิ่มสมาชิกเพื่อรอรับแต้ม"
                    paragraph="แอดไลน์ของเราเพื่อรอรับแต้มที่ได้รับจากขยะของคุณ และ แลกของรางวัล"
                />
            </div>
            <Footer />
        </>
    );
}
