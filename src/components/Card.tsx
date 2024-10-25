import Image from 'next/image';
import React from 'react';
import sampro from "@/assets/sampro.png"
import samlink from "@/assets/samlink.png"
import data from "@/assets/data.png"
import { Button } from './ui/button';
import { Input } from './ui/input';
import { FcGoogle } from 'react-icons/fc';
import or from "@/assets/Or.png"


const Card = () => {
  return (
    <div className='w-full lg:h-[70vh] overflow-y-auto hide-scrollbar p-20'>
      <div className='flex flex-col items-center justify-center gap-10'>

        <div className='flex flex-col md:flex-row h-auto lg:h-[50vh] w-[40vh] md:w-[50vw] bg-red-400 rounded-[1rem] sticky top-0 p-4'>
          <div className='left w-full md:w-1/2 h-full text-white flex flex-col items-center justify-center gap-6'>
            <h2 className='text-lg md:text-2xl font-bold text-center'>
              Sign Up and create your <br /> own store hassle-free.
            </h2>
            <h5 className='text-xs md:text-sm text-center px-4 md:px-10'>
              Join us via google sign-in and verify your influencer status by entering your social media ID and unlock your store @zero cost.
            </h5>
          </div>
          <div className='right w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0'>
            {/* <Image className='w-[20vw] lg:w-[12vw]' src={email} alt='Email icon' height={100} /> */}
            <form className='h-68 bg-black rounded-[1rem] p-4 flex flex-col gap-2 items-center justify-center lg:w-56'>
              <Button className='rounded-md border-2'><FcGoogle />
              Login with Goggle</Button>
              <Image src={or} alt='' />
              <Input placeholder='Email' className='border-none text-center font-bold text-white text-xl' />
              <hr className='bg-white text-white w-full border-1' />
              <Input placeholder='Password' className='border-none text-center font-bold text-white text-xl' />
              <hr className='bg-white text-white w-full border-1' />
              <Button className='bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mt-2'>Login</Button>
              <hr />
              <p className='text-white text-[.63rem]'>Don&apos;t have an account ? <span className='cursor-pointer text-green-400 underline'>Get Started.</span></p>
            </form>
          </div>
        </div>


        <div className='flex h-[50vh] w-[50vw] bg-blue-400 rounded-[1rem] sticky top-0 rotate-[5deg] p-10 z-20 hidden lg:flex'>
          <div className='left w-1/2 h-full text-white flex flex-col items-center justify-center gap-6'>
            <h2 className='text-2xl font-bold'>
              Sign Up and create your <br /> own store hassle-free.
            </h2>
            <h5 className='text-sm px-10'>
              Join us via google sign-in and verify your influencer status by entering your social media ID and unlock your store @zero cost.
            </h5>
          </div>
          <div className='right w-1/2 flex items-center justify-center'>
            <Image src={sampro} width={250} alt='' />
          </div>
        </div>

        <div className='flex h-[50vh] w-[50vw] bg-green-400 rounded-[1rem] sticky top-0 z-30 p-10 rotate-[2deg] hidden lg:flex'>
          <div className='left w-1/2 h-full text-white flex flex-col items-center justify-center gap-6'>
            <h2 className='text-2xl font-bold'>
              Sign Up and create your <br /> own store hassle-free.
            </h2>
            <h5 className='text-sm px-10'>
              Join us via google sign-in and verify your influencer status by entering your social media ID and unlock your store @zero cost.
            </h5>
          </div>
          <div className='right w-1/2 flex items-center justify-center'>
            <Image src={samlink} width={280} alt='' />
          </div>
        </div>

        <div className='flex h-[50vh] w-[50vw] bg-yellow-400 rounded-[1rem] sticky top-0 z-40 rotate-[-4deg] p-10 hidden lg:flex'>
          <div className='left w-1/2 h-full text-white flex flex-col items-center justify-center gap-6'>
            <h2 className='text-2xl font-bold'>
              Sign Up and create your <br /> own store hassle-free.
            </h2>
            <h5 className='text-sm px-10'>
              Join us via google sign-in and verify your influencer status by entering your social media ID and unlock your store @zero cost.
            </h5>
          </div>
          <div className='right w-1/2 flex items-center justify-center'>
            <Image src={data} width={130} alt='' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
