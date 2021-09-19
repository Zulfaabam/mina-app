import React from 'react'
import avatar from '../images/avatar-male.png'
import airplane from '../images/airplane.svg'
import BackButton from './BackButton'

export default function ChatPage() {
  return (
    <div className="h-screen bg-white">
      <header className="fixed top-0 w-full bg-blue-500 py-3 px-5 flex justify-start items-center gap-4">
        <BackButton />
        <img className="w-14" src={avatar} alt="avatar" />
        <div>
          <h2 className="text-white font-semibold">Kak Adam</h2>
          <p className="text-gray-200 text-xs">Admin Mina</p>
        </div>
      </header>
      <div className="chat-wrapper">
        <ul className="chats"></ul>
      </div>
      <div className="input-wrapper fixed bottom-0 w-full px-4 py-6">
        <div className="flex justify-around items-center">
          <input
            className="border"
            type="text"
            placeholder="Tulis pesan disini..."
          />
          <div className="send-btn w-max bg-blue-500 rounded-full p-2">
            <img className="w-8" src={airplane} alt="airplane" />
          </div>
        </div>
      </div>
    </div>
  )
}
