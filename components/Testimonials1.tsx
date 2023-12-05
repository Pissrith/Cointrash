import React, { useState } from 'react';
import Link from 'next/link';

const images = [
    {
        src: 'https://project319pic.blob.core.windows.net/picforcs319/plastic.jpg',
        alt: 'พลาสติก',
        text: 'พลาสติก',
    },
    {
        src: 'https://project319pic.blob.core.windows.net/picforcs319/glass.jpg',
        alt: 'แก้ว',
        text: 'แก้ว',
    },
    {
        src: 'https://project319pic.blob.core.windows.net/picforcs319/paper.jpg',
        alt: 'กระดาษ',
        text: 'กระดาษ',
    },
    {
        src: 'https://project319pic.blob.core.windows.net/picforcs319/medal.jpg',
        alt: 'โลหะ',
        text: 'โลหะ',
    },
];

const MyComponent = () => {
    const [showReadMore, setShowReadMore] = useState(false);

    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto text-center pb-10 bg-green-100 py-10 rounded-3xl drop-shadow-2xl'>
                <h1 className="text-5xl font-bold text-green-600 mb-10">
                    <span className="border-b-4 border-yellow-500 pb-2 ">ขยะรีไซเคิลที่เรารับ</span>
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="p-4 text-center"
                            onMouseEnter={() => setShowReadMore(true)}
                            onMouseLeave={() => setShowReadMore(false)}
                        >
                            <div className='transition ease-in-out delay-150 rounded-full hover:-translate-y-1 hover:scale-110 duration-300 h-fit group relative'>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-full w-48 h-48 object-cover mx-auto"
                                />
                                <div className="rounded-full inset-0 absolute mx-auto h-48 w-48 bg-black/50 flex items-center justify-center  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                                    <Link href={`/post/${index + 1}`} className="bg-transparent border-2 border-white rounded-md text-white  py-2 px-5">
                                        อ่านต่อ
                                    </Link>
                                </div>
                            </div>
                            <p className="mt-2 pt-5 text-2xl font-bold text-black">{image.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyComponent;
