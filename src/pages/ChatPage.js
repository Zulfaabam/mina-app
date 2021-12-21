import React from 'react'
import logo from '../images/mina-logo.svg'
import avatar from '../images/avatar-male.png'
import airplane from '../images/airplane.svg'
import BackButton from '../components/BackButton'
import ChatBubble from '../components/ChatBubble'

export default function ChatPage() {
  return (
    <div className="h-screen bg-white lg:flex">
      <div className="h-screen w-1/3 bg-launch hidden lg:flex justify-center items-center">
        <div className="w-max text-center">
          <img className="w-48" src={logo} alt="mina logo" />
          <p className="text-sm text-white tracking-wider mt-2 font-normal">
            LAYANAN PESAN ANONIM
          </p>
        </div>
      </div>
      <div>
        <header className="fixed top-0 w-full bg-blue-500 py-3 px-5 flex justify-start items-center gap-4">
          <BackButton />
          <img className="w-14" src={avatar} alt="avatar" />
          <div>
            <h2 className="text-white font-semibold">Kak Adam</h2>
            <p className="text-gray-200 text-xs">Admin Mina</p>
          </div>
        </header>
        <div className="w-max mt-24 px-2 chat-wrapper">
          <ul className="chats">
            <li>
              <ChatBubble />
            </li>
          </ul>
        </div>
        <div className="input-wrapper fixed bottom-0 w-full lg:w-2/3 px-4 py-6">
          <div className="flex justify-around items-center gap-4">
            <input
              className="w-4/5 border-2 border-blue-500 p-2 rounded-full outline-none"
              type="text"
              placeholder="Tulis pesan disini..."
            />
            <div className="send-btn w-max bg-blue-500 rounded-full p-2">
              <img className="w-8" src={airplane} alt="airplane" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
