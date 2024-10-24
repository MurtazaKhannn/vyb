'use client'

import React, { useState } from 'react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const MenuBar = () => {
  const [heading, setHeading] = useState("");

  return (
    <div className='my-5'>
      <Menubar className="flex justify-between w-full">
        <MenubarMenu>
          <MenubarTrigger 
            onClick={() => { setHeading("Travel") }} 
            className={`relative pb-2 cursor-pointer focus:outline-none 
            ${heading === 'Travel' ? 'after:bg-green-500' : 'after:bg-transparent'}
            after:content-[""] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] text-xs sm:text-xs md:text-base`}
          >
            Travel
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger 
            onClick={() => { setHeading("Digital") }} 
            className={`relative pb-2 cursor-pointer focus:outline-none 
            ${heading === 'Digital' ? 'after:bg-green-500' : 'after:bg-transparent'}
            after:content-[""] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] text-xs sm:text-sm md:text-base`}
          >
            Digital
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger 
            onClick={() => { setHeading("Brand") }} 
            className={`relative pb-2 cursor-pointer focus:outline-none 
            ${heading === 'Brand' ? 'after:bg-green-500' : 'after:bg-transparent'}
            after:content-[""] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] text-xs sm:text-sm md:text-base`}
          >
            Brand
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger 
            onClick={() => { setHeading("Merch") }} 
            className={`relative pb-2 cursor-pointer focus:outline-none 
            ${heading === 'Merch' ? 'after:bg-green-500' : 'after:bg-transparent'}
            after:content-[""] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] text-xs sm:text-sm md:text-base`}
          >
            Merch
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}

export default MenuBar
