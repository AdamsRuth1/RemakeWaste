"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { disableNavWithFooter } from "@/utils/disableNavWithFooter"

const Nav = () => {
    const path = usePathname()
  return (
    <>
      {!disableNavWithFooter.includes(path) && (
    <div className="bg-green-700 font-extrabold">Nav</div>
      )}
      </>
  )
}

export default Nav