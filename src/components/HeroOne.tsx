'use client'

import React from 'react'
import Image from 'next/image'
import heromodel from "@/assets/heromodel.png"

const HeroOne = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0'>
      {/* Left section */}
      <div className='left w-full lg:w-1/2 h-full lg:pl-20 mb-8 lg:mb-0'>
  <div className='flex flex-col gap-4'>
    <div className='flex gap-2 font-bold mt-6 lg:mt-10 flex-wrap justify-center lg:justify-start'>
      <p className='bg-white rounded-lg text-black text-4xl md:text-5xl lg:text-[4vw] p-2 py-2 md:py-3 lg:py-[2vh]'>
        One
      </p>
      <p className='bg-white rounded-lg text-black text-4xl md:text-5xl lg:text-[4vw] p-2 py-2 md:py-3 lg:py-[2vh]'>
        Stop
      </p>
    </div>
    <p className='bg-white rounded-lg text-black text-4xl md:text-5xl lg:text-[4vw] p-2 py-2 md:py-3 lg:py-[2vh] font-bold w-[90%] md:w-[70%] lg:w-[24vw] text-center lg:text-left mx-auto lg:mx-0'>
      Marketplace
    </p>
    <div className='flex gap-2 justify-center lg:justify-start text-center'>
      <p className='bg-white rounded-lg text-black text-4xl md:text-5xl lg:text-[4vw] p-2 py-2 md:py-3 lg:py-[2vh] font-bold w-[30%] md:w-[20%] lg:w-[8vw]'>
        For
      </p>
      <p className='rounded-lg text-black text-4xl md:text-5xl lg:text-[4vw] p-2 py-2 md:py-3 lg:py-[2vh] font-bold w-[60%] md:w-[50%] lg:w-[21vw] bg-green-400 text-center whitespace-nowrap overflow-hidden'>
        Influencers
      </p>
    </div>
  </div>

  <h1 className='text-2xl md:text-3xl lg:text-[3vw] font-bold mt-4 lg:mt-6 text-white text-center lg:text-left lg:leading-snug'>
    &quot;Unleash Your Influence: Sell <br className="hidden lg:block" /> Itineraries, Build Your Brand, <br className="hidden lg:block" /> Create Merch, and Share <br className="hidden lg:block" /> Content - All in One Hub.&quot;
  </h1>

  <div className='flex gap-4 justify-center lg:justify-start mt-4'>
    <button className='bg-green-400 rounded-lg text-sm lg:text-[1vw] px-4 lg:px-[1.5vw] py-3 font-semibold'>
      Demo Store
    </button>

    <button className="relative border-2 rounded-lg text-sm lg:text-[1vw] px-4 lg:px-[1.5vw] py-3 font-semibold bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500 border-[3px] border-transparent border-gradient-to-r from-indigo-500 to-red-500">
      Join Waitlist
    </button>
  </div>
</div>



      {/* Right section */}
      <div className='right w-full lg:w-1/2 h-full mt-6 lg:mt-0 bg-redd-500 flex justify-center lg:pl-14'>
        <Image src={heromodel} alt='Hero model image' className="w-full h-auto lg:w-[550px]" />
      </div>

    </div>
  )
}

export default HeroOne
