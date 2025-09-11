import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import HeaderAnimated from './pages/HeaderAnimated'
import Footer from './Footer'

export default function RootLayout() {
    const location = useLocation()
    const isHome = location.pathname==='/'
    return (
        <div>
   
              {isHome?<HeaderAnimated/>: <Header/>}
  
            <Outlet />
            <Footer />
        </div>
    )
}
