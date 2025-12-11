import { useEffect, useRef, useState } from 'react'
import { chatGreeting, quickQuestions } from '../data/resume'
import { generateChatResponse } from '../utils/chatbot'

export function Chat() {
  const [chatHistory, setChatHistory] = useState([chatGreeting])
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatWindowRef = useRef(null)
  const liveRegionRef = useRef(null)

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight
    }
  }, [chatHistory])

  const pushMessage = (role, text) => {
    setChatHistory((prev) => [...prev, { role, text }])
    if (role === 'assistant' && liveRegionRef.current) {
      liveRegionRef.current.textContent = text
    }
  }

  const handleChatSubmit = (event) => {
    event.preventDefault()
    const trimmed = chatInput.trim()
    if (!trimmed) return

    pushMessage('user', trimmed)
    setChatInput('')
    setIsTyping(true)

    setTimeout(() => {
      const answer = generateChatResponse(trimmed)
      pushMessage('assistant', answer)
      setIsTyping(false)
    }, 500)
  }

  const handleQuickQuestion = (question) => {
    pushMessage('user', question)
    setIsTyping(true)
    setTimeout(() => {
      const answer = generateChatResponse(question)
      pushMessage('assistant', answer)
      setIsTyping(false)
    }, 500)
  }

  return (
    <section className="section" id="chat" data-section>
      <div className="section__header">
        <p className="eyebrow">Chat</p>
        <h2 className="section__title">Ask me anything</h2>
        <p className="section__lede">
          This hiring assistant can answer questions about my experience, skills, projects, and availability. It uses
          rule-based responses from my resume data.
        </p>
      </div>
      <div className="chat">
        <div className="chat__window" ref={chatWindowRef} role="log" aria-live="polite" aria-atomic="false">
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`chat__bubble chat__bubble--${msg.role}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {isTyping && (
            <div className="chat__bubble chat__bubble--assistant">
              <p>Typing...</p>
            </div>
          )}
        </div>
        <div className="chat__quick-questions">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              className="quick-question-chip"
              onClick={() => handleQuickQuestion(q)}
              aria-label={`Ask: ${q}`}
            >
              {q}
            </button>
          ))}
        </div>
        <form className="chat__form" onSubmit={handleChatSubmit}>
          <input
            className="chat__input"
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask about experience, skills, or availability..."
            aria-label="Chat input for hiring questions"
          />
          <button className="btn btn--primary" type="submit" disabled={!chatInput.trim()}>
            Send
          </button>
        </form>
        <p className="chat__note">
          Rule-based responses. No external APIs. Focused on professional topics only.
        </p>
      </div>
      <div ref={liveRegionRef} className="sr-only" aria-live="polite" aria-atomic="true" />
    </section>
  )
}
