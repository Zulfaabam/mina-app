import React from 'react'
import BackButton from '../components/BackButton'
import logo from '../images/mina-logo.svg'
import adminKreasi from '../images/admin-kreasi.png'
import consultant from '../images/consultant.png'
import Button from '../components/NavButton'
import ButtonSec from '../components/NavButtonSec'

export default function TujuanPage() {
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
        <h1 className="text-white font-bold text-xl mt-8">Pilih Tujuan</h1>
        <div className="flex flex-col items-center gap-4 mt-4">
          <label>
            <input type="radio" name="tujuan" value="admin" checked />
            <div className="w-80 p-3 flex justify-between items-center gap-4 border rounded-lg">
              <img className="w-16" src={adminKreasi} alt="" />
              <div>
                <h2 className="text-white text-sm font-medium">Admin Kreasi</h2>
                <p className="text-white text-xs font-light">
                  Tanya seputar administrasi, internal komunitas, dan lain
                  sebagainya.
                </p>
              </div>
            </div>
          </label>
          <label>
            <input type="radio" name="tujuan" value="konsultan" />
            <div className="w-80 p-3 flex justify-between items-center gap-4 border rounded-lg">
              <img className="w-16" src={consultant} alt="" />
              <div>
                <h2 className="text-white text-sm font-medium">Konsultan</h2>
                <p className="text-white text-xs font-light">
                  Tanya dengan orang-orang yang berkontribusi membantu
                  permasalahan.
                </p>
              </div>
            </div>
          </label>
          <ButtonSec
            content="Daftar menjadi konsultan"
            path="/infokonsultan"
            width="w-48"
            paddingX="px-2"
          />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Button
            content="Lanjut"
            path="/konsultasi/tujuan/mulai"
            width="w-40"
            paddingX="px-10"
          />
        </div>
      </div>
    </div>
  )
}
