'use client'

import Image from 'next/image'
import logo from "@/assets/LOGO (1) 2.png"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaBars, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io'
import { Input } from './ui/input'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const Navbar = () => {

    return (
        <div className='w-full flex items-center justify-between h-16 bg-transparent mb-4  lg:px-16'>
  {/* Logo */}
  <div className='flex items-center'>
    <Image width={60} src={logo} alt='' />
  </div>

  {/* Search Bar */}
  <div className='flex-1 mx-4'>
    <Input 
      className='w-full h-10 lg:w-[105%] lg:h-12 rounded-full bg-white text-sm lg:text-[1.2vw] font-bold' 
      type="search" 
      placeholder="Search Creator/Product" 
    />
  </div>

  {/* Mobile Hamburger Menu */}
  <div className='flex lg:hidden'>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FaBars size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-black p-4">
        {/* Mobile Menu Options */}
        <div className='flex flex-col gap-4 lg:text-[1.5vw] font-bold'>
          <p>Fav Creators</p>
          <p>Merchandise</p>
          <p>Brand</p>
          <p>Digital</p>

          {/* Dropdown for Profile and Dashboard */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full">
                <div className='flex justify-between items-center'>
                  <FaUser size={20} />
                  <IoIosArrowDown size={20} />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem value="profile">Profile</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dashboard">Dashboard</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="store">My Store</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </DialogContent>
    </Dialog>
  </div>

  {/* Desktop Menu Links */}
  <div className='hidden lg:flex font-bold gap-6 lg:gap-12 text-white text-base lg:text-[1.8vw] px-4'>
    <p>Fav Creators</p>
    <p>Merchandise</p>
    <p>Brand</p>
    <p>Digital</p>
  </div>

  {/* Profile Dropdown for larger screens */}
  <div className='hidden lg:flex'>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className='flex gap-2 items-center'>
            <FaUser size={20} />
            <IoIosArrowDown size={20} />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[10vw]">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="profile">Profile</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dashboard">Dashboard</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="store">My Store</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>

    )
}

export default Navbar;
