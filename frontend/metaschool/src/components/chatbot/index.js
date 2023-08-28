import React from 'react'
import { useState } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'


function ChatBot() {
    const [showChatBot, setShowChatBot] = useState(false)

  return (
    <>
    <div className='chatBotButton' onClick = {() => {setShowChatBot(!showChatBot)}}><AiOutlineMessage size={20}/></div>
    <div className={showChatBot ? 'completeChatScreen activeChat' : 'completeChatScreen inactiveChat'}>
    <div className='chatScreen'>
        <div className='chatHeader'>
          <div className='contact'>
            <div className='contactImageHolder'>
              <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?q=10&h=200' fill className='contactImage'/>
            </div>
            <div className='contactText'>Suraj Shah</div>  
          </div>
          <div className='completeMessageLeft'>
            <div className='messageImageHolder'>
              <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?q=10' width={30} height={30} className='messageImage'/>
            </div>
            <div className='message'>
              <div className='messageText'>sd pfor assdafaf asdafsaf asfasfa fdfasdfdsf sdfsdfd sdfsdf  the interview indeed, what are you upto anddasdsadsad sadsad asdasd asdasda asdasd asdasd asdadas asdadassdaddadas asdasdsad</div>
            </div>
          </div>
          <div className='completeMessageRight'>
            <div className='messageImageHolder'>
              <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?q=10' width={30} height={30} className='messageImage'/>
            </div>
            <div className='message'>
              <div className='messageText'>sd pfor assdafaf asdafsaf asfasfa fdfasdfdsf sdfsdfd sdfsdf  the interview indeed, what are you upto anddasdsadsad sadsad asdasd asdasda asdasd asdasd asdadas asdadassdaddadas asdasdsad</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default ChatBot