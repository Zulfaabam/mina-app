import React from 'react'
import logo from '../images/mina-logo.svg'
import BackButton from '../components/BackButton'
import Button from '../components/NavButton'
import ButtonSec from '../components/NavButtonSec'

export default function KodePage() {
  return (
    <div className="h-screen bg-launch py-40">
      <div className="relative w-max mx-auto flex flex-col justify-center items-center">
        <div className="w-max absolute -top-20 left-0">
          <BackButton />
        </div>
        <img className="w-48" src={logo} alt="mina logo" />
        <p className="text-sm text-white tracking-wider mt-2 text-light">
          LAYANAN PESAN ANONIM
        </p>
        <h1 className="text-white font-bold text-xl mt-8">Buat Kode Unik</h1>
        <input
          className="w-80 mt-8 mb-8 px-6 py-4 rounded-xl outline-none text-sm text-center"
          type="text"
          id="text"
          placeholder="Buat kode..."
        ></input>
        <p className="text-xs text-white font-light">
          Kode ini sebagai penanda identitas Anda
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <Button
            content="Lanjut"
            path="/konsultasi/tujuan"
            width="w-48"
            paddingX="px-10"
          />
          <ButtonSec
            content="Skip"
            path="/konsultasi/tujuan"
            width="w-48"
            paddingX="px-8"
          />
        </div>
      </div>
    </div>
  )
}
