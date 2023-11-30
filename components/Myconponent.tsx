import React, { useState } from 'react';

const images = [
    {
        src: 'https://i.guim.co.uk/img/media/5f1155a189f9682073c34bc64e2915a65a0b8cf8/0_186_5936_3561/master/5936.jpg?width=465&dpr=1&s=none',
        alt: 'Image 1',
        text: 'Description for Image 1',
    },
    {
        src: 'https://i.guim.co.uk/img/media/5f1155a189f9682073c34bc64e2915a65a0b8cf8/0_186_5936_3561/master/5936.jpg?width=465&dpr=1&s=none',
        alt: 'Image 2',
        text: 'Description for Image 2',
    },
    {
        src: 'https://i.guim.co.uk/img/media/5f1155a189f9682073c34bc64e2915a65a0b8cf8/0_186_5936_3561/master/5936.jpg?width=465&dpr=1&s=none',
        alt: 'Image 3',
        text: 'Description for Image 3',
    },
    {
        src: 'https://i.guim.co.uk/img/media/5f1155a189f9682073c34bc64e2915a65a0b8cf8/0_186_5936_3561/master/5936.jpg?width=465&dpr=1&s=none',
        alt: 'Image 4',
        text: 'Description for Image 4',
    },
];

const MyComponent = () => {
    const [showReadMore, setShowReadMore] = useState(false);

    return (
        <section className='bg-emerald-100 py-16'>
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold text-yellow-500 mb-6">
                    <span className="border-b-4 border-yellow-500 pb-2">Header</span>
                </h1>
                <div className="flex flex-wrap">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-1/4 p-4 mt-5 text-center relative group"
                            onMouseEnter={() => setShowReadMore(true)}
                            onMouseLeave={() => setShowReadMore(false)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="rounded-full w-48 h-48 object-cover mx-auto group-hover:opacity-100"
                            />
                            <p className="mt-2 pt-5 text-xl text-black">{image.text}</p>
                            {showReadMore && (
                                <div className="mt-4 rounded-full mx-auto absolute inset-0 flex w-48 h-48 items-center justify-center bg-black bg-opacity-70 text-white transition duration-300 opacity-0 group-hover:opacity-100">
                                    <button className="bg-yellow-500 text-black px-4 py-2  hover:bg-yellow-400 focus:outline-none">
                                        อ่านต่อ
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default MyComponent;
