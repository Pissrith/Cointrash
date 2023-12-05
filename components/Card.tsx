"use client"
import React from 'react';

const Card = ({ imageUrl, name, describe }) => {
    return (
        <div className="max-w-xs mx-auto overflow-hidden bg-white shadow-lg rounded-lg hover:bg-opacity-90">
            <div className="h-fit group">
                <div className="relative overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="object-cover w-full h-48"
                    />
                    <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                        <p className='text-white'>{describe}</p>
                    </div>

                </div>
                <div className="p-4 text-center">
                    <h2 className="text-regular font-semibold py-3">{name}
                    </h2>

                </div>
            </div>
        </div>
    );
};

export default Card;
