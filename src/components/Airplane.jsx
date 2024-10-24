import React from 'react'
import mountains from "@/assets/mountains.png"
import Image from 'next/image'
import planes from "@/assets/plane.png"

const Airplane = () => {
  return (
    <div className='w-full min-h-full bg-black text-white flex flex-col items-center justify-center rounded-[1rem] p-4'>

      <Image className='absolute rounded-[1rem] w-2/3 rounded-[1rem] bg-black object-cover' src={mountains} alt='' />

      {/* Main content container */}
      <div className='h-full z-20 flex flex-col items-center space-y-16'> 
        {/* Use space-y-16 to add equal vertical gap */}

        {/* Header */}
        <h2 className='w-full flex items-center justify-center text-[3vw] font-bold text-white'>How to List ?</h2>

        {/* Content with the airplane icons */}
        <div className='relative w-full flex items-center justify-center'>
          <Image src={planes} alt='' />
        </div>

        {/* Footer */}
        <h2 className='text-white w-full flex items-center justify-center text-[2vw]'>
          You Curate Experience, We Make It Happen
        </h2>
      </div>
    </div>
  );
};

export default Airplane;
