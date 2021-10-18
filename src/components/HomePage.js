import React from 'react'
import logo from '../images/mina-logo.svg'
import Button from './NavButton'
import ButtonSec from './NavButtonSec'

export default function HomePage() {
  return (
    <div className="launch relative bg-launch h-screen">
      <div className="w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center">
        <img className="w-48" src={logo} alt="mina logo" />
        <p className="text-sm text-white tracking-wider mt-2 font-normal">
          LAYANAN PESAN ANONIM
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button
            content="Tanya Ustadz"
            path="/tanyaustadz"
            width="w-48"
            paddingX="px-10"
          />
          <Button
            content="Konsultasi"
            path="/konsultasi"
            width="w-48"
            paddingX="px-10"
          />
          <Button
            content="Kritik & Saran"
            path="/kritiksaran"
            width="w-48"
            paddingX="px-10"
          />
        </div>
        <div className="mt-20">
          <ButtonSec
            content="Login as consultant"
            width="w-48"
            paddingX="px-8"
          />
        </div>
      </div>
    </div>
  )
}
