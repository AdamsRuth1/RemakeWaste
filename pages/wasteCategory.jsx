import React, { useState } from 'react'
import { wasteData } from '@/components/data'
import Card from '@/components/card'
import Image from 'next/image'

const WasteCategory = () => {
  const [show, setShow] = useState(false);

  const handleShow = ()=>{
    setShow(!show)
  }
  return (
    <div className='w-full lg:w-10/12 mx-auto px-5 md:px-10 lg:gap-20 py-5 lg:py-20'>
      <div className='flex justify-between mb-8 '>
        <h2 className='font-capriola text-2xl md:text-3xl font-semibold text-brand-100'>Waste Categories</h2>
        <div onClick={handleShow} className='text-green-600 font-semibold text-lg cursor-pointer'>{show ? "See All" : "See Less"}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5 ">
        {show ? (
          wasteData.map((waste, index) =>(
            <Card key={index} className="bg-brand-400 flex">
                <Image src={waste.picture} alt='wasteimage'/>
                <p className='ml-3'>{waste.details}</p>

            </Card>
        ))
        ) : (
          wasteData.slice(0,3).map((waste, index) =>(
            <Card key={index} className="bg-brand-400 flex">
                <Image src={waste.picture} alt='wasteimage'/>
                <p className='ml-3'>{waste.details}</p>

            </Card>
        ))
        )}

    </div>
    </div>
  );
};

export default WasteCategory;