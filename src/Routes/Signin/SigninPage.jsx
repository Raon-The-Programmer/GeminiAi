import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import './Signin.css'

const SigninPage = () => {
  return (
    <div className='Signinpage'>
      <SignIn path="/sign-in" signUpUrl='/sign-up' forceRedirectUrl='/dashboard'/>
    </div>
  )
}

export default SigninPage