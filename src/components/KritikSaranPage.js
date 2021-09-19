import React from 'react'
import logo from '../images/mina-logo.svg'
import BackButton from './BackButton'
import NavButton from './NavButton'

export default function KritikSaranPage() {
  return (
    <div className="h-screen bg-launch py-24 relative">
      <div className="w-max absolute top-10 left-14">
        <BackButton />
      </div>
      <div className="w-min mx-auto flex flex-col justify-center items-center">
        <img className="w-48" src={logo} alt="mina logo" />
        <p className="text-sm text-white tracking-wider mt-2 text-light">
          LAYANAN PESAN ANONIM
        </p>
        <textarea
          className="textarea my-8 p-4 rounded-xl outline-none text-sm"
          name="text"
          id="text"
          cols="30"
          rows="10"
          placeholder="Tulis kritik atau saran disini..."
        ></textarea>
        <NavButton content="Kirim Pesan" />
      </div>
    </div>
  )
}
