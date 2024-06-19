import React from 'react'
import { GrShieldSecurity } from "react-icons/gr";
const About = () => {
  return (
   <section className='m-20'>
     <div className=' w-[26rem] my-3'>
       <h1 className='text-5xl font-semibold'>What is Omega Trading?</h1>
       <p className='py-5'>
       Lorem ipsum dolor sit amet,  consectetur adipiscing elit consectetur adipiscing elit
       </p>
      </div>
      <div className='bg-[#141414] rounded-2xl flex flex-wrap justify-center my-10' >

        <div className='m-5'>
           <div className='flex'>
           <GrShieldSecurity />
           <h2 className='font-bold mx-3 pb-2'>Secure</h2>
           </div>
           <div className='font-semibold text-[0.8rem] w-[25rem]'>
           Lorem ipsum dolor sit amet,  consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </div>
        </div>
        
        <div className='m-5'>
           <div className='flex'>
           <GrShieldSecurity />
           <h2 className='font-bold mx-3 pb-2'>Secure</h2>
           </div>
           <div className='font-semibold text-[0.8rem] w-[25rem]'>
           Lorem ipsum dolor sit amet,  consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </div>
        </div>
        <div className='m-5'>
           <div className='flex'>
           <GrShieldSecurity />
           <h2 className='font-bold mx-3 pb-2'>Secure</h2>
           </div>
           <div className='font-semibold text-[0.8rem] w-[25rem]'>
           Lorem ipsum dolor sit amet,  consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor  elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </div>
        </div>

        <div className='m-5'>
           <div className='flex'>
           <GrShieldSecurity />
           <h2 className='font-bold mx-3 pb-2'>Secure</h2>
           </div>
           <div className='font-semibold text-[0.8rem] w-[25rem]'>
           Lorem ipsum dolor sit amet,  consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </div>
        </div>
        
      </div>
   </section>
  )
}

export default About
