import React from 'react'
import SignInPage from '../../components/SignInPage'
import SignUpPage from '../../components/SignUpPage'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LogInPage = () => {
    const page=useSelector((store)=>store.user.isSignInOrSignUp)
  return (
    <div>
        {page=="signin"&& <SignInPage/>}
       { page=="signup"&&<SignUpPage/>}
        
    </div>
  )
}

export default LogInPage;