import React, { useState } from 'react'

const FAQs = ({ question, answer }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className='FAQs-container'>
      <p onClick={()=> setOpen(!open)}className='question-text'>{question}</p>
      <p style={open ? {display: "none"} : {display: "block"}}className='answer-text'>{answer}</p>
    </div>
  )
}

export default FAQs
