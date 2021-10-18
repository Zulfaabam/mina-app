import React from 'react'
import BackButton from './BackButton'
import logo from '../images/mina-logo.svg'
import { Link } from 'react-router-dom'
import adminKreasi from '../images/admin-kreasi.png'
import consultant from '../images/consultant.png'

export default function TujuanPage() {
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
        <h1 className="text-white font-bold text-xl mt-8">Pilih Tujuan</h1>
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="w-72 p-3 flex justify-between items-center gap-4 border rounded-lg">
            <img className="w-16" src={adminKreasi} alt="" />
            <div>
              <h2 className="text-white text-sm font-medium">Admin Kreasi</h2>
              <p className="text-white text-xs font-light">
                Tanya seputar administrasi, internal komunitas, dan lain
                sebagainya.
              </p>
            </div>
          </div>
          <div className="w-72 p-3 flex justify-between items-center gap-4 border rounded-lg">
            <img className="w-16" src={consultant} alt="" />
            <div>
              <h2 className="text-white text-sm font-medium">Konsultan</h2>
              <p className="text-white text-xs font-light">
                Tanya dengan orang-orang yang berkontribusi membantu
                permasalahan.
              </p>
            </div>
          </div>
          <Link to="/infokonsultan">
            <button className="bg-transparent border border-white w-48 py-2 px-2 rounded-full text-white text-xs font-bold">
              Daftar menjadi konsultan
            </button>
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Link to="/konsultasi/lanjut/lanjut2">
            <button className="bg-white w-40 py-2 px-10 rounded-full text-blue-500 text-sm font-bold">
              Lanjut
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
