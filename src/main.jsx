import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './Routes/Homepage/Homepage.jsx'
import Dashboar from './Routes/Dashboard/Dashboar.jsx'
import Chatpage from './Routes/Chatpage/Chatpage.jsx'
import Rootlayout from './Layouts/Rootlayout/Rootlayout.jsx'
import DashboardLayout from './Layouts/DashboardLayout/DashboardLayout.jsx'
import SigninPage from './Routes/Signin/SigninPage.jsx'
import SignupPage from './Routes/Signup/SignupPage.jsx'


const router = createBrowserRouter([
  {
    element:<Rootlayout/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/sign-in/*',
        element:<SigninPage/>
      },
      {
        path:'/sign-up/*',
        element:<SignupPage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:'/dashboard',
            element:<Dashboar/>
          },
          {
            path:'/dashboard/chats/:chatid',
            element:<Chatpage/>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
