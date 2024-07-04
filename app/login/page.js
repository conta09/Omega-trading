"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { auth, signInWithEmailAndPassword, signInWithPopup, provider } from '../firebaseConfig';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in, redirect to dashboard
        router.push('/dashboard');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the dashboard after successful login
      router.push('/dashboard');
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Redirect to the dashboard after successful login
      router.push('/dashboard');
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div>
      <div className='flex justify-between py-4 mx-10 my-3'>
        <Link href="/">
          <Image
            src="/omega-logo.png"
            alt="logo"
            width={80}
            height={80}
          />
        </Link>
        <div className='mr-4 flex gap-4'>
          <Link href="/signup">
            <button className='text-white font-medium text-[0.8rem] py-2 px-6 rounded bg-[#2E2E2E]'>Signup</button>
          </Link>
        </div>
      </div>
      <hr className='pt-1'></hr>
      <div className="flex justify-center min-h-screen bg-black">
        <div className="w-full max-w-sm p-8 space-y-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-medium text-center py-4 text-white">Login to Omega Trading</h1>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                id="email-or-phone"
                type="text"
                className="w-full px-2 py-3 mt-1 text-[0.9rem] text-white border bg-transparent rounded-md focus:outline-none focus:ring focus:border-[#e5e7ea]"
                placeholder="Enter email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                className="w-full px-2 py-3 mt-1 text-[0.9rem] text-white border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full px-4 py-3 font-medium text-[0.9rem] text-black bg-white rounded-md hover:bg-[#e4e4e4] focus:outline-none focus:ring focus:ring-blue-300"
                onClick={handleSignIn}
              >
                LogIn
              </button>
              <p className='text-center my-4'>or</p>
              <button
                type="button"
                className="w-full px-4 py-3 font-medium text-[0.9rem] text-black bg-white rounded-md hover:bg-[#e4e4e4] focus:outline-none focus:ring focus:ring-blue-300"
                onClick={handleGoogleSignIn}
              >
                Sign In with Google
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-white">
            <a href="#" className="font-medium hover:underline">Need help signing in?</a>
          </p>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
