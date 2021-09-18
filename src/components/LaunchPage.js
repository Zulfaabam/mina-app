import React from 'react'
import logo from '../images/mina-logo.svg'
import Button from './Button'

export default function LaunchPage() {
  return (
    <div className="launch relative bg-launch h-screen">
      <div className="w-min absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center">
        <img className="w-48" src={logo} alt="mina logo" />
        <p className="text-sm text-white tracking-wider mt-2">
          LAYANAN PESAN ANONIM
        </p>
        <div className="mt-6 space-y-2">
          <Button content="Konsultasi" />
          <Button content="Kritik & Saran" />
        </div>
      </div>
    </div>
  )
}
