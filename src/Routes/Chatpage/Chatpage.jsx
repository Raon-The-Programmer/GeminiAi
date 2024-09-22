import React, { useEffect, useRef } from 'react'
import './Chatpage.css'
import NewPrompt from '../../Components/newPrompt/NewPrompt'

const Chatpage = () => {
  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current.scrollIntoView({behavior:"smooth"})
  },[])
  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message</div>
          <NewPrompt/>
          <div ref={endRef}/>
        </div>
      </div>
    </div>
  )
}

export default Chatpage