import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../My Data/DataProvider'
import robot from '../../public/robot.png'
import user from '../../public/user.png'

const HistoryChats = () => {
  const { setActiveForm } = useContext(DataContext)
  const historyChats = JSON.parse(localStorage.getItem("conversation"))
  const [data, setData] = useState(historyChats || [])
  
  useEffect(()=>{
    setActiveForm(false)
    return ()=> setActiveForm(true)
  },[])
  
  return (
      <div className='chatContainer'>
                  {data.length > 0
                  ? data.map(message =>(
                        <div key={message.id} id={message.content.length > 50 
                    ? "longMessage" 
                    : null} className={message.role === "robot"  ? "robotMessage" : 'chatMessage'}>
                                <p
                                  className="messagePara" >{message.content}</p>
                                <img 
                                  className={message.role === "robot" && "robot"}   
                                  src={message.role === 'robot'
                                          ? robot
                                          : user }
                                  alt={message.role}
                                />
                        </div>
                    ))
                    :<div className='empty-message'>
                        <p>No chat history available.</p>
                        <Link className='historyButton' to="/">Start a new chat</Link>
                      </div>
                    }
                    {data.length > 0 
                    ? <Link className='newChat' to="/">Continue conversation</Link>
                    : null}
      </div> 

  )
}

export default HistoryChats


//id={message.content.length > 50 ? "longMessage" : null}
//{message.content.length > 40 ? 'messagePara' : null }
//message.content.length < 100 ? message.content : message.content.replace(/\./g, "\n")