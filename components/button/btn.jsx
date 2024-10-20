"use client"
import React from 'react'
import Image from "next/image";

const Btn = ({label, className, imgclass, spanclass, img,alt}) => {
  return (
    <div>
        <button type='submit' className={`${className} rounded-3xl bg-brand-100 text-white`}><span className={spanclass}><Image className={imgclass}  src={img} alt={alt}/><span className="self-center">{label}</span></span></button>
    </div>
  )
}

export default Btn