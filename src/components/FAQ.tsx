import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className='w-full h-full flex lg:flex-row flex-col items-center mb-4 mt-2 justify-center gap-4'>


      <div className='left lg:w-1/2 w-[80vh] lg:h-screen lg:gap-10 gap-2 flex flex-col items-center justify-center text-white'>
      <h2 className='uppercase text-green-400 lg:text-4xl text-center font-bold text-[1.3rem]'> Frequently asked <br /> questions</h2>
      <p className='font-bold lg:text-xs text-[2vw]'>Quick answers to questions you may have. Can&apos;t find what <br /> you&apos;re looking for? <br />
      Check out our full documentation.</p>
      </div>


      <div className='right lg:w-1/2 w-[80vw] lg:h-screen text-black flex items-center justify-center'>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Do I need technical skills to use the platform?</AccordionTrigger>
        <AccordionContent>
            No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do I need technical skills to use the platform?</AccordionTrigger>
        <AccordionContent>
            No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

      </div>


    </div>
  )
}

export default FAQ
