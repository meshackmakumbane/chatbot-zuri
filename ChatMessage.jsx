import React, { useState, useContext, useEffect } from 'react'
import robot from '../../public/robot.png'
import user from '../../public/user.png'
import { DataContext } from '../My Data/DataProvider'

const ChatMessage = () => {
  const { conversation, chatContainer, botResponses } = useContext(DataContext)
  
  const [greeting, setGreeting] = useState(["How can i help you today?", 
                                            "Got any question for me?", 
                                            "Need help with something?", 
                                            "What's on your mind?", 
                                            "What brings you here today?"])
  const [greetingNum, setGreetingNum] = useState(Math.floor(Math.random() * greeting.length))                                    

  const hour = new Date().getHours()
  let message;
  if(hour < 12){
    message = "Good morning!"
  }else if(hour > 12 && hour < 17){
    message = "Good afternoon!"
  }else{
    message = "Good evening!"
  }

  return (
      <div className='chatContainer'>
        {conversation.length > 0
            ? conversation.map(message =>(
                <div 
                    key={message.id} id={message.content.length > 50 
                    ? "longMessage" 
                    : null} 
                    className={message.role === "robot"  
                    ? "robotMessage" 
                    : 'chatMessage'}>
                    <p 
                        className={message.content.length > 40 
                        ? 'messagePara' 
                        : null } 
                    >
                      {message.content.length < 100 
                      ? message.content 
                      : message.content.replace(/\./g, "\n")}
                    </p>
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
                <p>{greeting[greetingNum]}</p>
            </div>
        }
        <div ref={chatContainer}/>
      </div> 
  )
}

export default ChatMessage


