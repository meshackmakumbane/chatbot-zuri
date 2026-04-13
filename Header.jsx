import React, { useState, useRef, useContext } from 'react'
import Robot from '../../public/robot.png'
import { DataContext } from '../My Data/DataProvider'

const Header = () => {
  const { toggleMenu, isOpen, headerText, mainHeader } = useContext(DataContext)

  return (
    <header>
      <div ref={mainHeader} className='chatbot-header'>
        <div className="HeaderImage">
          <img src={Robot} alt="Chatbot Image" />
        </div>

        <div className='HeaderMessage'>
          <p>{headerText.greeting}</p>
          <span>{headerText.message}</span>
        </div>

        <div className='HeaderInformation'>
          <span onClick={toggleMenu}>{isOpen ? "Close" : "Menu"}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
