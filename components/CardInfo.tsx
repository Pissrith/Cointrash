import React from 'react';
import { ItemType } from '../type';
import Image from 'next/image'

type CardItemProps = {
    item: ItemType;
};

const CardItem: React.FC<CardItemProps> = ({ item }) => {
    return (

        <div className="mb-5 flex items-center justify-center">
            <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                <div className="py-7 px-6 text-center">
                    <div className="-mt-7 mb-7 -mx-6 rounded-tl border-b rounded-tr h-[215px] overflow-hidden">
                        <img src={item.pic} alt="cover" className="w-full h-full object-cover" />
                    </div>
                    <h5 className="text-green-600 font-bold text-xl  mb-4 dark:text-white-light">{item.name}</h5>
                    <p className="text-white-dark">{item.description}</p>

                </div>
            </div>
        </div>
    );
};

export default CardItem;
