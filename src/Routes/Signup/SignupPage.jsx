import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import './Signup.css'

const SignupPage = () => {
  return (
    <div className='Signuppage'>
      <SignUp path="/sign-up" signInUrl='/sign-in' />
    </div>
  )
}

export default SignupPage
