import React from 'react'
import './globals.css'
import { Inter, Capriola } from 'next/font/google'

import Footer from '@/components/footer/footer'
import Navbar from '@/components/nav/navbar'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

const capriola = Capriola({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-capriola',
});

export const metadata = {
  title: 'RemakeWaste',
  description: 'Ecosystem Recycling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.Capriola}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
