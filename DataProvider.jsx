import React, { createContext, 
                useState, 
                useRef, 
                useEffect } from 'react'

const DataContext = createContext()

const DataProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeForm, setActiveForm] = useState(true)
  const [userMessage, setUserMessage] = useState("")
  const [conversation, setConversation] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const chatContainer = useRef(null)
  const [headerText, setHeaderText] = useState({
    greeting: "Hey there!",
    message: "I'm Zuri, How can i help you today"
  })

  useEffect(()=>{
    chatContainer.current.scrollIntoView({behaviour : "smooth"})
  },[conversation])

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("conversation"))
    if(saved) setConversation(saved)
  },[])
  
  const mainHeader = useRef(null)
  const sidebarButtons = useRef(null)

  const botResponses = [

    {
      keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
      response: [
        "Hey there! 👋 I’m a chatbot built by a full-stack developer to demonstrate coding and data flow skills. You can ask me about my developer, my abilities, or the technologies I’m built with.",
        "Hi! I can chat about my developer, what I can do, and how I was built. Feel free to ask me anything!",
        "Hello! I’m here to answer questions about my creator, my tech stack, or my features. Ask me away!"
      ]
    },

    {
      keywords: [
        "who are you", "about you", "developer", "creator", "built you", "made you", "programmer", 
        "who created you", "tell me about yourself", "origin", "identity", "person behind you"
      ],
      response: [
        "I was built by Meshack Makumbane, a JavaScript full-stack JavaScript developer",
        "My developer, Meshack, creates web applications, APIs, interactive systems and mobile applications using JavaScript stacks.",
        "I’m a project that represents Meshack’s ability to manage frontend and backend logic and create interactive user experiences."
      ]
    },

    {
      keywords: [
        "skills", "abilities", "tech", "stack", "technologies", "languages", "tools", 
        "can you code", "what do you know", "coding", "programming", "frameworks", "libraries"
      ],
      response: [
        "My developer works extensively JavaScript stacks, building full-stack applications from scratch.",
        "Frontend, backend, API design, and interactive UI development — that’s Meshack’s forte.",
        "He focuses on writing clean, maintainable code and implementing practical solutions to demonstrate real-world programming."
      ]
    },

    {
      keywords: [
        "what can you do", "abilities", "help", "features", "capabilities", "functions", 
        "can you respond", "what is your purpose", "demonstrate", "show", "perform"
      ],
      response: [
        "I can respond to user messages using intelligent keyword matching.",
        "I simulate a real chat experience with typing indicators and interactive responses",
        "My purpose is to showcase data handling, state updates, and controlled logic in a way that anyone can interact with."
      ]
    },

    {
      keywords: [
        "how do you work", "logic", "how built", "mechanism", "process", 
        "explain", "system", "functionality", "workflow", "under the hood", "architecture"
      ],
      response: [
        "When a user sends a message, I process the input, match it against keywords, and return the most relevant response.",
        "I demonstrate data flow: user input → processing → output, showing controlled state updates in React."
      ]
    },

    {
      keywords: [
        "why", "purpose", "project", "goal", "reason", "objective", 
        "intention", "aim", "motivation"
      ],
      response: [
        "This project exists to demonstrate practical skills in React and JavaScript, emphasizing proper data flow and state management.",
        "It highlights the ability to handle user input, process logic, and deliver dynamic responses.",
        "The project is a practical example of problem-solving, clean code, and a well-structured interactive application."
      ]
    },

    {
      keywords: [
        "improve", "future", "upgrade", "enhance", "add", "extend", "expand", 
        "next", "better", "what’s next", "plans", "goals", "enhancements"
      ],
      response: [
        "In the future, I could be upgraded with AI or NLP capabilities for more natural language understanding.",
        "Future versions might include smarter keyword matching, memory, or context awareness to improve the chat experience.",
        "I could be connected to a backend API or database for dynamic responses, making interactions even more interactive and realistic."
      ]
    },

    {
      keywords: ["fallback", "error", "don’t understand", "confused", "unknown", "no match", "help me", "not sure", "what"],
      response: [
        "Hmm… I’m not quite sure how to respond to that 😅. I can answer questions about my developer, the technologies I’m built with, and what I can do. Try asking things like 'who built you?', 'what technologies do you use?', or 'what can you do?'.",
        "I didn’t understand that one. My purpose is to demonstrate keyword matching, state updates, and proper data flow in React. Ask me about my developer, skills, or abilities.",
        "Oops! That question is new for me 😅. I’m designed to showcase programming concepts, React state management, and logic flow. Try asking about the project, features, or my creator."
      ]
    },

    {
      keywords: ["thanks", "thank you", "appreciate", "cheers", "okay"],
      response: [
        "You’re welcome 🙌! I’m happy to help explain what I can do.",
        "Glad I could assist! 😄 Feel free to ask more about my developer or features.",
        "No problem at all! I’m here to show how keyword matching and state management work in React."
      ]
    },

    // Goodbye
    {
      keywords: ["bye", "goodbye", "see you", "later"],
      response: [
        "Goodbye! Hope you enjoyed interacting with me 😄",
        "See you later! Don’t forget, I’m here to demonstrate data flow and React logic anytime.",
        "Bye! Thanks for checking out my capabilities and my developer’s work!"
      ]
    }
  ]

  const fallbackResponses = [
    `Hmm… I’m not sure how to respond to that 😅. 
    I can answer questions about my developer, the technologies I’m built with, and what I can do. 
    Try asking things like "who built you?", "what technologies do you use?", or "what can you do?".`,

    `I didn’t quite understand that. 
    I’m designed to demonstrate keyword matching, state updates, and proper data flow. 
    Maybe try asking me about the developer or the features I have.`,

    `Oops! That one’s new for me 😅. 
    I can help explain my developer’s skills, the tech stack I’m built with, or what features I can do. 
    Please ask a question related to those!`
  ]

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }

  //Get Message
  const getResponse = ()=>{
      // User input
      if(!userMessage.trim()) return;

      const newMessage = {
        id: Date.now(),
        content: userMessage,
        role: "user"
      }

      // updating the conversation with user input
      setConversation(prev => [...prev, newMessage])

      // Typing indicator
      setTimeout(() => {
        setConversation(prev => [
          ...prev, {id: Date.now(), content: "Typing...", role: "robot"}
        ])
        setHeaderText({
          greeting: "Ongoing conversation",
          message: "Talking..."
        })
      }, 2000);

      //chatbot response
      setTimeout(() => {

        const match = botResponses.find(question => 
        question.keywords.some(word =>(
          userMessage.toLowerCase().includes(word.toLowerCase())
        )))

        if(match){
          const response = match.response
          const mutateResponse = Math.floor(Math.random() * response.length)
        
          setConversation(prev => {
            const removeTyping = prev.filter(message => message.content !== "Typing...")

            const newMessage = {
              id: Date.now(), 
              content: response[Math.floor(Math.random() * response.length)], 
              role: "robot"
            }

            const updatedConversation = [...removeTyping, newMessage]
            //Save on local storage
            localStorage.setItem("conversation", JSON.stringify(updatedConversation))

            return updatedConversation
          })
        }

        if(!match){
          const mutateFallbacks = Math.floor(Math.random() * fallbackResponses.length)
        
          setConversation(prev => {
            const removeTyping = prev.filter(message => message.content !== "Typing...")

            const newMessage = {
                    id: Date.now(), 
                    content: fallbackResponses[mutateFallbacks], 
                    role: "robot"
                  }

            const updatedConversation = [...removeTyping, newMessage]
            //Save on local storage
            localStorage.setItem("conversation", JSON.stringify(updatedConversation))    

            return updatedConversation;
          })
        }
      }, 3000);

      setUserMessage('')
  }   

  return (
    <DataContext.Provider value={{
      toggleMenu, 
      isOpen, 
      setIsOpen, 
      userMessage, 
      setUserMessage,
      conversation, 
      setConversation,
      activeForm,
      setActiveForm,
      chatContainer,
      headerText,
      mainHeader,
      sidebarButtons,
      botResponses,
      getResponse
      }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext , DataProvider }
