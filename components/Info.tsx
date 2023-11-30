import React from 'react'
import Link from 'next/link';

function Info() {
    return (
        <>

            <div className='mx-auto flex flex-wrap items-center py-16 bg-emerald-100 shadow-inner'>
                <div className="w-full px-6 border-solid bg-emerald-100  md:w-1/2 lg:w-1/2  mb-8">
                    <div className="px-6 border-2 shadow-lg bg-white">
                        <p className='text-gray-600 my-4'>เคยคิดไหมว่าขยะที่เราตั้งใจแยก ได้ถูกนำไปใช้งานจริงหรือเปล่า?</p>
                        <h2 className='text-3xl font-semibold'>รู้จักกับ coin trash
                        </h2>
                        <p className='text-gray-600 my-4'>โครงการช่วยสิ่งแวดล้อม ลดจำนวนขยะ ด้วยการเป็นตัวกลางนำขยะรีไซเคิลจากบ้านเรือนของคนไทยกลับมาใช้ใหม่ </p>
                        <div className='flex space-x-6 mb-7  '>
                            <a href='#' className='bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block hover:bg-blue-600'>ขยะที่เรารับ</a>
                            <Link href="/pickup">
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 ">
                    <img src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-auto' />
                </div>
            </div>
        </>
    )
}

export default Info