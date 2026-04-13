import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../My Data/DataProvider'

const Buttons = ({title, onClick, direct, where}) => {
  const { sidebarButtons } = useContext(DataContext)
  return (
      <Link 
          target={where}
          ref={sidebarButtons}
          className='sidebar-button' 
          to={direct} 
          onClick={onClick}
          >{title}
      </Link>
  )
}

export default Buttons
