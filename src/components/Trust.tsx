import Image from 'next/image';
import React from 'react';
import fourfaces from "@/assets/fourfaces.png";
import pc from "@/assets/computer.png"
import phone from "@/assets/phone.png"
import money from "@/assets/money.png"

const Trust = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center text-white'>
      
      {/* Left Column */}
      <div className='lg:w-1/3 w-full flex items-center justify-center p-4'>
        <span className='text-3xl md:text-4xl flex items-center justify-center text-green-400 font-bold text-center'>
          From Creation to <br /> Monetization: Vyb Store <br /> Has it All
        </span>
      </div>

      {/* Right Column */}
      <div className='lg:w-2/3 w-full flex flex-col lg:flex-row items-center justify-center gap-4 p-4'>
        
        {/* Each Card Section */}
        <div className='flex flex-col gap-4 w-full lg:w-2/5'>
          <div className='bg-black h-[42vh] rounded-[1rem] flex flex-col items-center justify-center gap-2 p-4'>
            <h2 className='font-bold text-xl md:text-2xl text-center'>Trusted By <br /> Influencers</h2>
            <h3 className='text-sm text-center'>A trusted platform for influencers to <br /> grow and earn.</h3>
            <Image src={fourfaces} width={150} alt='' />
          </div>

          <div className='bg-black h-[42vh] rounded-[1rem] flex flex-col items-center justify-center gap-2 p-4'>
            <h2 className='font-bold text-xl md:text-2xl text-center'>Authentic Payment <br /> Partner</h2>
            <h3 className='text-sm text-center'>Reliable, fast, and secure payments<br /> you can trust.</h3>
            <Image src={phone} width={150} alt='' />
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full lg:w-2/5'>
          <div className='bg-black h-[38vh] rounded-[1rem] flex flex-col items-center justify-center gap-2 p-4'>
            <h2 className='font-bold text-xl md:text-2xl text-center'>Secured Data</h2>
            <h3 className='text-sm text-center'>Advanced security measures to <br /> protect your valuable data</h3>
            <Image src={pc} width={150} alt='' />
          </div>

          <div className='bg-black h-[42vh] rounded-[1rem] flex flex-col items-center justify-center gap-2 p-4'>
            <h2 className='font-bold text-xl md:text-2xl text-center'>Monetize Your <br /> Influence</h2>
            <h3 className='text-sm text-center'>Seamlessly turn your influence into <br /> consistent revenue</h3>
            <Image src={money} width={150} alt='' />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Trust;
