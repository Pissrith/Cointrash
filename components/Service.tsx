import React from 'react'
import FadeIn from './FadeIn'

import { services } from '../data'
export default function Service() {
    return (
        <div
            id="services"
            className='container mx-auto text-center'
        >
            {services.map((service, i) => (
                <FadeIn key={i} delay={0.2} direction="down">
                    {/* <div className='flex flex-col lg:flex-row gap-4 w-full items-center'>
                        <img
                            src="https://www.svgrepo.com/show/278711/garbage-trash.svg"
                            alt=""
                            className='max-h-[48px] max-w-[84px]'
                        />
                        <div className='flex flex-col gap-1.5'>
                            <h3 className='text-center lg:text-start text-2xl lg:text-[28px] text-black font-medium'>
                                {service.title}
                            </h3>
                            <h6 className='test-center lg:text-start text-base lg:text-lg text-gray-400 font-medium'>
                                {service.subtitle}
                            </h6>
                        </div>
                    </div> */}
                    <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                        <div className="py-7 px-6">
                            <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                                <img src="/assets/images/profile-28.jpeg" alt="cover" className="w-full h-full object-cover" />
                            </div>
                            <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">CLI Based</h5>
                            <p className="text-white-dark">Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.</p>
                            <button type="button" className="btn btn-primary mt-6">
                                Explore More
                            </button>
                        </div>
                    </div>

                </FadeIn>
            ))}
        </div>
    )
}
