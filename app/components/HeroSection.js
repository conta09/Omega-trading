"use client"
import Link from 'next/link'
import React from 'react'
const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
    <div className='flex flex-col items-center w-2/4 mt-5'>
      <h1 className='font-bold lg:text-6xl py-5 text-center'>Be smart,save smart with Omega Trading</h1>
      <Link href="/login">
      <button className='text-black font-bold text-[0.8rem] py-3 px-6 rounded-md bg-white mt-6'>GET STARTED</button>
      </Link>
    </div>
  
    </div>
  )
}

export default HeroSection
