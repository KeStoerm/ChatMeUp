import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { firebaseAuth } from './firebase/clientapp';

export function middleware(request: NextRequest) {
  const auth = firebaseAuth;
  
  if (request.nextUrl.pathname === "/"){
    return auth.currentUser ? NextResponse.redirect(new URL('/chat', request.url)) : NextResponse.next();
  }

  if (request.nextUrl.pathname === "/chat") {
    return auth.currentUser ? NextResponse.next() : NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
