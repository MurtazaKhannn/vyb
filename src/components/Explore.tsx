import Image from 'next/image'
import React from 'react'
import darj from "@/assets/exploreone.png"
import { Button } from './ui/button'
import sam from "@/assets/sam.png"
import explore from "@/assets/expore"

const Explore = () => {
    return (
        <div className='relative w-full min-h-full bg-black'>
            <div className='flex flex-col'>
                <span className='text-3xl font-bold text-white flex items-center justify-center text-center'>Explore Our Curated Travel Itineraries</span>

                <div className='flex p-8 gap-4 overflow-x-auto items-center justify-start hide-scrollbar'>
                    {explore.map((e: any, key) => {
                        return (
                            <div key={key} className='relative w-[17rem] h-[30.2rem] rounded-[1rem] flex-shrink-0'>
                                <Image src={e.image} width={280} alt='' />
                                <span className='absolute bottom-20 text-white w-full font-bold text-xl text-center'>{e.city}</span>
                                <span className='absolute bottom-14 text-center w-full text-white font-bold'>{e.state}</span>
                                <div className='w-full flex items-center justify-center relative bg-red-400'>
                                    <Button className='absolute bottom-4 flex w-44 font-bold text-lg rounded-[1rem]' variant="secondary">
                                        {e.name} <Image className='flex items-center' src={sam} width={20} alt='' />
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>



                

            </div>

        </div>
    )
}

export default Explore
