"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '@/components/Nav'
import Info from '@/components/Banner'
import Testimonials from '@/components/Testimonials'
import Test from '@/components/Testimonials1'
import Footer from '@/components/Footer'
import NavLogin from '@/components/NavLogin'
export default function page() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <NavLogin />
        <Info />
        <Testimonials />
        <Test />
        <Footer />
      </>
    )
  }
  return (
    <>
      <Info />
      <Testimonials />
      <div id='test'>
        <Test />
      </div>
      <Footer />
    </>)
}
