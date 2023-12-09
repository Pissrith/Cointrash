import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
// import { faRecycle } from '@fortawesome/free-solid-svg-icons';
// import { faGift } from '@fortawesome/free-solid-svg-icons';
// import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
function Testimonials() {
  return (
    <section className='bg-white py-16 '>
      <div className='container mx-auto text-center mb-8'>
        <div className='pb-5'>
          <h1 className="text-5xl font-bold text-green-500 mb-6">
            <span className="border-b-4 border-yellow-500 pb-2" >
              ขั้นตอนการใช้งาน
            </span>
          </h1>
        </div>


        <div className='flex flex-wrap justify-center mt-8'>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <Link href='/#test'>
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 max-w-auto w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light">
                <div className="py-7 px-6">
                  <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                    <img src="https://project319pic.blob.core.windows.net/picforcs319/COINCASH4.png" alt="cover" className="object-cover" />
                  </div>
                  <h5 className="text-green-500 text-xl font-semibold mb-4 dark:text-white-light">1. แยกประเภทขยะ</h5>
                  <p className="text-white-dark">คัดแยกขยะแต่ละประเภทออกจากกันก่อนส่ง รวมถึงพลาสติกที่มีโค้ดแตกต่างกัน</p>

                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <Link href='/exchange'>
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 max-w-auto w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light ">
                <div className="py-7 px-6">
                  <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                    <img src="https://project319pic.blob.core.windows.net/picforcs319/exchange.png" alt="cover" className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-green-500 text-xl font-semibold mb-4 dark:text-white-light">2. แลกขยะและรับ Tcoin</h5>
                  <p className="text-white-dark">นำขยะที่ผ่านกระบวนการแยกแล้ว ไปยังจุดรับฝากขยะแล้วนำ
                    ขยะรีไซเคิลทุกกิโล แลกเป็น Tcoin</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ">
            <Link href='/success'>
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 max-w-auto w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light ">
                <div className="py-7 px-6">
                  <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                    <img src="https://project319pic.blob.core.windows.net/picforcs319/tracking.png" alt="cover" className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-green-500 text-xl font-semibold mb-4 dark:text-white-light">3. ติดตามสถานะการรีไซเคิล</h5>
                  <p className="text-white-dark">จำนวนขยะรีไซเคิลที่เราส่งให้กับโรงงาน จะถูกคิดคำนวณเป็นปริมาณการลดการปล่อยก๊าซเรือนกระจก</p>

                </div>
              </div>
            </Link>
          </div>
        </div>
      </div >
    </section >
  );
}

export default Testimonials;
