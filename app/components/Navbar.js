import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
     <div className='flex justify-between py-4'>
      <Image
  src="/omega-logo.png"
  alt="logo"
  width={200}
  height={200}
/>
        <ul className='flex mx-4 font-medium mt-3'>
            <li className='mx-3'>services</li>    
            <li className='mx-3' >contact us</li>  
        </ul>          
        <div className='mr-4 flex gap-4 '>
         <Link href="/login">
          <button className='border border-white text-white  font-bold py-2 px-6 rounded bg-transparent'>Login</button>
         </Link>
         <Link href="/signup">
            <button className=' text-black font-bold py-2 px-6 rounded bg-white'>Sign Up</button>
        </Link>
        </div>
      

      </div>    
  )
}

export default Navbar
