import React from 'react'
import './newprompt.css'

const NewPrompt = () => {
  return (
    <>
    <div className="endChat"></div>
        <form className="newForm">
            <label htmlFor="file">
                <img src="/attachment.png" alt="attach" />
            </label>
            <input id="file" type='file' multiple={false}  hidden/>
            <input type="text" placeholder='Ask anything...' />
            <button>
                <img src="/arrow.png" alt="send" />
            </button>
        </form>
    </>
  )
}

export default NewPrompt