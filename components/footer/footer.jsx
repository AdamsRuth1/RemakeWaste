"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { disableNavWithFooter } from "@/utils/disableNavWithFooter"

const Footer = () => {
    const path = usePathname()
  return (
    <>
      {!disableNavWithFooter.includes(path) && (
    <div className="bg-green-700 font-extrabold">Footer</div>
      )}
      </>
  )
}

export default Footer