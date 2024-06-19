import React from 'react'
import Link from 'next/link'
const SignUp = () => {
  return (
    <div>
    <div className='flex justify-between py-4 mx-10 my-3'>
        <h1 className='font-semibold text-[1.5rem] mx-3'>LOGO</h1>
        <div className='mr-4 flex gap-4 '>
        <Link href="/login">
          <button className='text-white font-medium text-[0.8rem] py-2 px-6 rounded bg-[#2E2E2E]'>Login</button>
        </Link>
        </div>
  
      </div>    
      <hr className='pt-3 '></hr>


        <div className="flex  justify-center min-h-screen bg-black">
        <div className="w-full max-w-sm p-8 space-y-6  rounded-lg shadow-md">
          <h1 className="text-2xl font-medium text-center py-4 text-white">Join Omega Trading</h1>
          <form className="space-y-4">
            <div>
              <input
                id="email-or-phone"
                type="text"
                className="w-full px-2 py-3 mt-1 text-[0.9rem] text-white border bg-transparent rounded-md focus:outline-none focus:ring focus:border-[#e5e7ea]"
                placeholder="Enter a mail or phone number"
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                className="w-full px-2 py-3 mt-1 text-[0.9rem] text-black border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-medium text-[0.9rem] text-black bg-white rounded-md hover:bg-[#e4e4e4] focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-white">
            <a href="#" className="font-medium hover:underline">Forgot your password?</a>
          </p>
          <hr></hr>
        </div>
      </div>
    </div>
  )
}

export default SignUp
