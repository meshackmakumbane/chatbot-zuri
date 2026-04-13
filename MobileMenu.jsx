import React, { useContext, useState } from 'react'
import Button from './Button'
import { DataContext } from '../My Data/DataProvider'

const MobileMenu = () => {
  const { isOpen, setIsOpen, conversation } = useContext(DataContext)

  const handleTheme =()=>{
    setIsOpen(false)
    document.body.classList.toggle("dark-theme")
    mainHeader.current?.classList.toggle("chatbot-header-dark")
  }

  return (
    <div className='mobile-menu' 
      style={isOpen 
      ? { display: "block"} 
      : { display: "none" }}>
      <h1>Zuri- Chatbot</h1>
      <div className='profile-buttons'>
        <Button title={conversation.length > 0 ? "Continue chatting" : "Start chatting"} direct="/" onClick={()=>setIsOpen(false)} />
        <Button title="Chat history" direct="/history" onClick={()=>setIsOpen(false)} />
        <Button title="Dark mode" onClick={handleTheme} />
        <Button title="Clear Conversation" direct="/" onClick={()=>setIsOpen(false)} />
        <Button title="About ZURI" direct="/about-zuri" onClick={()=>setIsOpen(false)}/>
      </div>
      <small className='version-line'>Zuri &middot; version 0.1</small>
    </div>
  )
}

export default MobileMenu
