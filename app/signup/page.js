"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { auth, createUserWithEmailAndPassword, provider, db, doc, setDoc } from '../firebaseConfig';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign Up button clicked");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User created: ", user);

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
      });

      console.log("User data saved to Firestore");

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error("Error signing up: ", error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      console.log("User signed up with Google: ", user);

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
      });

      console.log("Google user data saved to Firestore");

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error("Error signing up with Google: ", error.message);
    }
  };

  return (
    <div>
      <div className='flex justify-between py-4 mx-10 my-3'>
        <Image
          src="/omega-logo.png"
          alt="logo"
          width={120}
          height={120}
        />
        <div className='mr-4 flex gap-4 '>
          <Link href="/login">
            <button className='text-white font-medium text-[0.8rem] py-2 px-6 rounded bg-[#2E2E2E]'>Login</button>
          </Link>
        </div>
      </div>
      <hr className='pt-3 '></hr>
      <div className="flex justify-center min-h-screen bg-black">
        <div className="w-full max-w-sm p-8 space-y-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-medium text-center py-4 text-white">Join Omega Trading</h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
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
                type="submit"
                className="w-full px-4 py-3 font-medium text-[0.9rem] text-black bg-white rounded-md hover:bg-[#e4e4e4] focus:outline-none focus:ring focus:ring-blue-300"
              >
                Signup
              </button>
              <p className='text-center my-4'>or</p>
              <button
                type="button"
                className="w-full px-4 py-3 font-medium text-[0.9rem] text-black bg-white rounded-md hover:bg-[#e4e4e4] focus:outline-none focus:ring focus:ring-blue-300"
                onClick={handleGoogleSignUp}
              >
                Signup with Google
              </button>
            </div>
          </form>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
