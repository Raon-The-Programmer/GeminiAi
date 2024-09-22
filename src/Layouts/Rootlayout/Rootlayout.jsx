import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Rootlayout.css'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const Rootlayout = () => {
    
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className='rootlayout'>
            <header>
                <Link className='logo' to='/'>
                    <img src="/logo.png" alt="logo" />
                    <span>LAMA AI</span>
                </Link>
                <div className="user">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    </ClerkProvider>    
  )
}

export default Rootlayout