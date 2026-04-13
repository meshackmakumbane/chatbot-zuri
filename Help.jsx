import React,{ useContext, useEffect, useState } from 'react'
import { DataContext } from '../My Data/DataProvider'
import FAQs from '../UI elements/FAQs'



const Help = () => {
  const { activeForm, setActiveForm } = useContext(DataContext)
  const [open, setOpen] = useState(true)
  const [ answer, setAnswer ] = useState([{
    whatIsZuri: "Description",
    answer: "message"
  }])

  useEffect(()=>{
    setActiveForm(false)
    return ()=> setActiveForm(true)
  },[])

  return (
      <div className="help-container">
        <div className='inner-help-container'>
          <h1>Gettting Started</h1>
          <FAQs question="What is Zuri?" answer="Zuri is a smart chatbot designed to make customer response easy. it quickly answers common questions using company's FAQs, so you get the info you need fast. Cant's find what you're looking for? No worries - Zuri seamlessly connects you with a human admin for extra help, ensuring you're never stuck. Simple, efficient, and always there to help!" />
          <FAQs question="How does Zuri work" answer="Zuri helps by providing help and access fast to user queries, by responding to user queries based on the company's FAQs and setup" />
          <FAQs question="Key Features" answer="Includes smart FAQs, live chat handoff, customization and analytics tracking" />
        </div>
        <div className='inner-help-container'>
          <h1>Setup & Customization</h1>
          <FAQs question="What is Zuri?" answer="Zuri is a smart chatbot designed to make customer response easy. it quickly answers common questions using company's FAQs, so you get the info you need fast. Cant's find what you're looking for? No worries - Zuri seamlessly connects you with a human admin for extra help, ensuring you're never stuck. Simple, efficient, and always there to help!" />
          <FAQs question="How does Zuri work" answer="Zuri helps by providing help and access fast to user queries, by responding to user queries based on the company's FAQs and setup" />
          <FAQs question="Key Features" answer="Includes smart FAQs, live chat handoff, customization and analytics tracking" />
        </div>
        <div className='inner-help-container'>
          <h1>Troubleshooting</h1>
          <FAQs question="What is Zuri?" answer="Zuri is a smart chatbot designed to make customer response easy. it quickly answers common questions using company's FAQs, so you get the info you need fast. Cant's find what you're looking for? No worries - Zuri seamlessly connects you with a human admin for extra help, ensuring you're never stuck. Simple, efficient, and always there to help!" />
          <FAQs question="How does Zuri work" answer="Zuri helps by providing help and access fast to user queries, by responding to user queries based on the company's FAQs and setup" />
          <FAQs question="Key Features" answer="Includes smart FAQs, live chat handoff, customization and analytics tracking" />
        </div>
        <div className='inner-help-container'>
         <h1>More Help</h1>
          <FAQs question="What is Zuri?" answer="Zuri is a smart chatbot designed to make customer response easy. it quickly answers common questions using company's FAQs, so you get the info you need fast. Cant's find what you're looking for? No worries - Zuri seamlessly connects you with a human admin for extra help, ensuring you're never stuck. Simple, efficient, and always there to help!" />
          <FAQs question="How does Zuri work" answer="Zuri helps by providing help and access fast to user queries, by responding to user queries based on the company's FAQs and setup" />
          <FAQs question="Key Features" answer="Includes smart FAQs, live chat handoff, customization and analytics tracking" />
        </div>
      </div>
  )
}

export default Help
