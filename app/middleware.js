// middleware.js
import { NextResponse } from 'next/server';
import { auth } from './firebaseConfig';

export async function middleware(req) {
  const token = req.cookies.get('firebaseAuthToken');
  let user;

  if (token) {
    try {
      user = await auth.verifyIdToken(token);
    } catch (error) {
      console.error('Token verification failed:', error);
    }
  }

  if (!user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
