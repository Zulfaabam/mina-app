import React from 'react'
import logo from '../images/mina-logo.svg'
import BackButton from './BackButton'
import { Link } from 'react-router-dom'

export default function KodePage() {
  return (
    <div className="h-screen bg-launch py-40 relative">
      <div className="w-max absolute top-10 left-14">
        <BackButton />
      </div>
      <div className="w-max mx-auto flex flex-col justify-center items-center">
        <img className="w-48" src={logo} alt="mina logo" />
        <p className="text-sm text-white tracking-wider mt-2 text-light">
          LAYANAN PESAN ANONIM
        </p>
        <h1 className="text-white font-bold text-xl mt-8">Buat Kode Unik</h1>
        <input
          className="w-60 mt-8 mb-8 px-6 py-4 rounded-xl outline-none text-sm text-center"
          type="text"
          id="text"
          placeholder="Buat kode..."
        ></input>
        <p className="text-xs text-white font-light">
          Kode ini sebagai penanda identitas Anda
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <Link to="/konsultasi/lanjut">
            <button className="bg-white w-48 py-2 px-10 rounded-full text-blue-500 text-sm font-bold">
              Lanjut
            </button>
          </Link>
          <Link to="/konsultasi/lanjut">
            <button className="bg-transparent border border-white w-48 py-2 px-8 rounded-full text-white text-xs font-bold">
              Skip
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
