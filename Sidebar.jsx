import React, { useContext, useRef } from 'react'
import Button from '../UI elements/Button'
import { DataContext } from '../My Data/DataProvider'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const { conversation, chatContainer, setConversation, mainHeader, sidebarButtons } = useContext(DataContext)

  const navigate = useNavigate()
  const removeData = ()=>{
    JSON.parse(localStorage.removeItem("conversation"))
    setConversation([])
    navigate("/")
  }
  
  const handleTheme =()=>{
    document.body.classList.toggle("dark-theme")
    mainHeader.current?.classList.toggle("chatbot-header-dark")
  }

  return (
    <section className='menu-section'>
      <h1>Zuri - Chatbot</h1>
    <div className='desktop-profile-buttons'>
            <Button title={conversation.length > 0 ? "Continue chatting" : "Start chatting"} direct="/" />
            <Button title="Chat history" direct="/history"  />
            <Button title="Dark mode" onClick={handleTheme}  />
            <Button title="Clear conversation" onClick={removeData} direct="/" />
            <Button title="About ZURI" direct="/about-zuri" />
    </div> 

    <small className='version-line'>Active conversaton</small>

    <div className='conversation-container'>
      {conversation.length > 0
      ?<div className='inner-conversation-container'>
        {conversation.map(message =>(
          <p key={message.id} id={message.content.length > 30 ? "SideBarLongMessage" : null} className={message.role === "user" ? "user-container-message" : "robot-container-message"}>{message.content}</p>
        ))}
      </div>
      : <p className='start-conversation'>Start a conversation</p>
      }
      <div ref={chatContainer}/> 
    </div>

    <small className='version-line'>Resources</small>
    
      <div className='desktop-profile-buttons filled-button'>
        <Button title="Source Code" direct="https://github.com/meshackmakumbane/chatbot-zuri" where="_blank" />
      </div>
    
    <small className='version-line'>Zuri &middot; version 0.1</small>

    </section>
  )
}

export default Sidebar
