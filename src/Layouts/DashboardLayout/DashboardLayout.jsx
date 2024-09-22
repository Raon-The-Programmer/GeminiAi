import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Chatlist from '../../Components/ChatList/Chatlist'
import './Dashboardlayout.css'

const DashboardLayout = () => {
const {userId,isLoaded} = useAuth()
const navigate = useNavigate()

useEffect(()=>{
  if(isLoaded && !userId){
    navigate('/sign-in')
  }
},[isLoaded,userId])

if(!isLoaded) return <div>


  ......LOADING
</div>

  return (
    <div className='dashboardLayout'>
        <div className="menu"><Chatlist/></div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout