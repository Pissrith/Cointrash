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
        <section className="w-full py-12 bg-green-100 mb-10 rounded-lg shadow-xl ">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-4xl font-bold text-center">สมาชิกในทีม</h1>
                    <p className="max-w-[600px] text-center text-gray-500"></p>
                </div>
                <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="border bg-white text-card-foreground overflow-hidden rounded-lg shadow-lg" data-v0-t="card">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                    <img
                                        src="/colorglass.jpg"
                                        alt='member1'
                                        className="h-full w-full object-cover rounded-full"
                                    />
                                </span>
                            </span>
                            <h3 className="text-xl font-medium">นาย ณัฐพร     ตติยรัตนาภินันท์</h3>
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2 py-1 text-sm">
                                Project Manager
                            </div>
                        </div>
                    </div>
                    <div className="border bg-white text-card-foreground overflow-hidden rounded-lg shadow-lg" data-v0-t="card">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                    <img
                                        src="/colorglass.jpg"
                                        alt='member1'
                                        className="h-full w-full object-cover rounded-full"
                                    />
                                </span>
                            </span>
                            <h3 className="text-xl font-medium">นาย พิสิฐชัย     ศรีทองรุ่งทิพย์ </h3>
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2 py-1 text-sm">
                                Frontend Developer , Backend Developer
                            </div>
                        </div>
                    </div>
                    <div className="border bg-white text-card-foreground overflow-hidden rounded-lg shadow-lg" data-v0-t="card">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                    <img
                                        src="/colorglass.jpg"
                                        alt='member1'
                                        className="h-full w-full object-cover rounded-full"
                                    />
                                </span>
                            </span>
                            <h3 className="text-xl font-medium">นางสาว กัลยากร     ดอนสกุล</h3>
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2 py-1 text-sm">
                                UX Designer
                            </div>
                        </div>
                    </div>
                    <div className="border bg-white text-card-foreground overflow-hidden rounded-lg shadow-lg" data-v0-t="card">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                    <img
                                        src="/colorglass.jpg"
                                        alt='member1'
                                        className="h-full w-full object-cover rounded-full"
                                    />
                                </span>
                            </span>
                            <h3 className="text-xl font-medium">นางสาวนันณภัฐฑ์     กิติชา</h3>
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2 py-1 text-sm">
                                Project Manager
                            </div>
                        </div>
                    </div>
                    <div className="border bg-white text-card-foreground overflow-hidden rounded-lg shadow-lg" data-v0-t="card">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                    <img
                                        src="/colorglass.jpg"
                                        alt='member1'
                                        className="h-full w-full object-cover rounded-full"
                                    />
                                </span>
                            </span>
                            <h3 className="text-xl font-medium">นาย ธนกร     ทองจันทร์ </h3>
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2 py-1 text-sm">
                                Frontend Developer , Backend Developer
                            </div>
                        </div>
                    </div>
                    <div className="border bg-white text-card-foreground overflow-hidden rounded-lg shadow-lg" data-v0-t="card">
                        <div className="flex flex-col items-center space-y-4 p-4">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                    <img
                                        src="/colorglass.jpg"
                                        alt='member1'
                                        className="h-full w-full object-cover rounded-full"
                                    />
                                </span>
                            </span>
                            <h3 className="text-xl font-medium">นาย ธีรภัทร์     ศรีเทพ</h3>
                            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2 py-1 text-sm">
                                Frontend Developer , Backend Developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
    )
}
