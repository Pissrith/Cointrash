import React from 'react'

export default function about() {
    return (<div>

        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <img
                        alt="About us"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src="https://www.nestle.co.th/sites/g/files/pydnoa486/files/styles/full_width_image_1920x795_/public/Sustainability-Content-MainBanner-1440x472.jpg?itok=kVkrbSqX"
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">เกี่ยวกับ CoinTrash</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                เราไม่เพียงแค่ลดปริมาณขยะ แต่เราจะทำให้โลกของคุณดียิ่งขึ้น
                                ช่วยเสริมสร้างสังคมที่มีวัฒนธรรมการรับรู้สิ่งแวดล้อม กับ CoinTrash รับประสบการณ์ที่แตกต่าง!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     


    </div>
    )
}
