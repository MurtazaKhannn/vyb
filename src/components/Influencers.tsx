import Image from 'next/image'
import React from 'react'
import ione from "@/assets/ione.png"
import itwo from "@/assets/itwo.png"
import ithree from "@/assets/ithree.png"
import { Button } from './ui/button'
import { MdArrowOutward } from 'react-icons/md'

const Influencers = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 min-h-64'>
        <h1 className='text-4xl text-green-400 font-bold flex gap-10'>Our Influencers</h1>
      <div className='flex items-center justify-center gap-10' >

        {/* First Image with hover effect */}
        <div className='relative group'>
          <Image className='rounded-full grayscale group-hover:grayscale-0 transition duration-300 ease-in-out' src={ione} width={240} alt='' />
          
          {/* Button appears on hover */}
          <Button className='font-bold w-20 absolute top-[50%] left-[34%] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out' variant="secondary">
            Jay <MdArrowOutward />
          </Button>
        </div>

        {/* Second Image with hover effect */}
        <div className='relative group'>
          <Image className='rounded-full grayscale group-hover:grayscale-0 transition duration-300 ease-in-out' src={itwo} width={240} alt='' />
          
          {/* Button appears on hover */}
          <Button className='font-bold w-20 absolute top-[50%] left-[34%] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out' variant="secondary">
            Sam <MdArrowOutward />
          </Button>
        </div>

        {/* Third Image with hover effect */}
        <div className='relative group'>
          <Image className='rounded-full grayscale group-hover:grayscale-0 transition duration-300 ease-in-out' src={ithree} width={240} alt='' />
          
          {/* Button appears on hover */}
          <Button className='font-bold w-20 absolute top-[50%] left-[34%] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out' variant="secondary">
            Kim <MdArrowOutward />
          </Button>
        </div>

        {/* Fourth Image with hover effect */}
        <div className='relative group'>
          <Image className='rounded-full grayscale group-hover:grayscale-0 transition duration-300 ease-in-out' src={ione} width={240} alt='' />
          
          {/* Button appears on hover */}
          <Button className='font-bold w-20 absolute top-[50%] left-[34%] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out' variant="secondary">
            Jay <MdArrowOutward />
          </Button>
        </div>

      </div>

      <h1 className='text-4xl text-green-400 font-bold flex gap-10'>How to get started?</h1>
      </div>
  )
}

export default Influencers
