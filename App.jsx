import React, { useState, useContext, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import MainLayout from './MainLayout'
import HistoryChats from './Components/HistoryChats'
import Main from './Components/Main'
import ChatMessage from './/Components/ChatMessage'
import Help from './Components/Help'
import About from './Components/About'
import { DataProvider } from './My Data/DataProvider'


const App = () => {

  return (
    <DataProvider>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ChatMessage />} />
        <Route path='/history' element={<HistoryChats />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about-zuri" element={<About />} />
      </Route>
    </Routes>
    </DataProvider>
  )
}

export default App
