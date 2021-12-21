import React from 'react'
// import logo from '../images/mina-logo.svg'
import Button from '../components/NavButton'

export default function SelesaiMendaftarPage() {
  return (
    <div className="launch relative bg-launch h-screen">
      <div className="w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center">
        {/* <img className="w-48" src={logo} alt="mina logo" /> */}
        <p className="text-sm text-white tracking-wider mt-2 font-normal">
          Pendaftaran selesai.
        </p>
        <div className="mt-4">
          <Button
            path="/"
            content="Kembali ke Homepage"
            width="w-48"
            paddingX="px-2"
          />
        </div>
      </div>
    </div>
  )
}
