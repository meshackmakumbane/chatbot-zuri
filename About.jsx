import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../My Data/DataProvider'
import Robot from '../../public/robot.png'
import Button from '../UI elements/Button'

const AiModel = () => {
  const { activeForm, setActiveForm } = useContext(DataContext)

  useEffect(()=>{
    setActiveForm(false)
    return ()=> setActiveForm(true)
  },[])

  return (
    <>
      <div className="component-container">
        <div className="intro-container">
          <img src={Robot} alt="Zuri AI-Assistant" />
          <h1>ZURI</h1>
        </div>
        <div className="info-container">
          <p>
            Zuri is a rule-based chatbot, built with React and JavaScript, uses keyword matching to provide fast, 
            interactive responses. It’s ideal for FAQs, helping users quickly find answers, and demonstrates 
            practical skills in state management and data flow. In the future, it can be extended with a live 
            chat feature, allowing users to connect with an admin if they can’t find the information they need.
          </p>

          <h3>Key features of Zuri</h3>
          <ul>
            <li><strong>Keyword-based Responses </strong> 
              – Matches user input to predefined keywords for fast, relevant answers.
            </li>

            <li><strong>State Management </strong> 
              – Demonstrates React state flow by updating conversations dynamically.
            </li>

            <li><strong>Typing Indicator </strong> 
              – Simulates a real chat experience with a “Typing…” indicator for better UX.
            </li>

            <li><strong>Persistent Conversations </strong> 
              – Saves chat history in localStorage so users can reload the page without losing messages.
            </li>

          </ul>
        </div> 
      </div>
      <div className="about-zuri">
        <p>Version 0.1 - Zuri: Chatbot</p>
      </div>
    </>
  )
}

export default AiModel
