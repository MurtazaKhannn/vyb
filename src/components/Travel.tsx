import React from 'react';
import mountain from "@/assets/travel.png";
import Image from 'next/image';

const Travel = () => {
    return (
        <div className='w-full relative min-h-[60vh]'>
            <Image className='rounded-t-[1rem] object-cover' src={mountain} alt='Travel Background' layout="fill" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white text-center'>
                <span className='text-[4rem] sm:text-[5rem] md:text-[8vh] lg:text-[12vh] font-bold'>TRAVEL</span>
                <span className='text-[1rem] sm:text-[2.5vh] md:text-[3.5vh] lg:text-[4vh] font-bold text-white'>
                    Turn your travel experience into itinerary, <br /> travel package with VYB Store and share it <br /> with your true followers.
                </span>
            </div>
        </div>
    );
}

export default Travel;
