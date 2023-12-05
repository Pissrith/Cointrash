"use client"
import React from 'react'
import Info from '@/components/Banner'
import Testimonials from '@/components/Testimonials'
import Test from '@/components/Testimonials1'
import Footer from '@/components/Footer'
import About from '@/components/about'
export default function page() {

  return (
    <>
      <Info />
      <Testimonials />
      <div id='test'>
        <Test />
      </div>
      <div className='container mx-auto'>
        <About />
      </div>


      <Footer />
    </>
  )
}
