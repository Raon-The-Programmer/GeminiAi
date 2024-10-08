import React from 'react'
import { Link } from 'react-router-dom'
import './ChatList.css'

const Chatlist = () => {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to='/dashboard'>Create a new Chat</Link>
        <Link to='/'>Explore Lama AI</Link>
        <Link to='/'>Contact</Link>
        <hr/>
        <span className='title'>RECENT CHATS</span>
        <div className="list">
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
            <Link to='/'>My Chat 1</Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src="/logo.png" alt="logo" />
            <div className="texts">
                <span>Upgrade to Lama AI Pro</span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default Chatlist