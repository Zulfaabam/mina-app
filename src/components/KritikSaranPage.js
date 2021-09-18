import React from 'react'
import logo from '../images/mina-logo.svg'
import Button from './Button'

export default function KritikSaranPage() {
  return (
    <div className="h-screen bg-launch">
      <img className="w-48" src={logo} alt="mina logo" />
      <p className="text-sm text-white tracking-wider mt-2 font-normal">
        LAYANAN PESAN ANONIM
      </p>
      <textarea name="text" id="text" cols="30" rows="10"></textarea>
      <Button content="Kirim Pesan" />
    </div>
  )
}
