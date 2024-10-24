import React from 'react'
import Navbar from '@/components/Navbar'
import HeroOne from '@/components/HeroOne'
import MenuBar from '@/components/MenuBar'
import Travel from '@/components/Travel'
import Explore from '@/components/Explore'
import Airplane from "@/components/Airplane"
import Trust from '@/components/Trust'
import Influencers from '@/components/Influencers'
import Card from '@/components/Card'
import FAQ from '@/components/FAQ'


const page = () => {
  return (
    <div className='w-full min-h-screen bg-[#181818] px-2 lg:px-20 pt-8 overflow-x-hidden' >
      <Navbar />
      <HeroOne />
      <MenuBar />
      <Travel />
      <Explore />
      <Airplane />
      <Trust />
      <Influencers />
      <Card />
      <FAQ />
    </div>
  )
}

export default page
