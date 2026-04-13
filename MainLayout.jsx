import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import MobileMenu from './UI elements/MobileMenu'

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='chatbot-container'>
      <Header />
      <MobileMenu />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default MainLayout
