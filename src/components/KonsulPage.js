import React from 'react'
import logo from '../images/mina-logo.svg'
import avatarMale from '../images/avatar-male.png'
import avatarFemale from '../images/avatar-female.png'
import NavButton from './NavButton'
import BackButton from './BackButton'

export default function KonsulPage() {
  return (
    <div className="h-screen bg-laki py-20 relative">
      <div className="w-80 mx-auto ">
        <BackButton />
        <div className="space-y-6 mt-6">
          <img className="w-28" src={logo} alt="mina logo" />
          <h2 className="text-white text-sm font-bold">
            Mohon isi dengan jujur...
          </h2>
          <p className="text-white italic text-xs">
            “Wahai orang-orang yang beriman! <br />
            Bertakwalah kepada Allah, dan bersamalah <br />
            kamu dengan <strong>orang-orang yang jujur</strong> <br />
            (benar).” (QS. At-Taubah: 119)
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-white text-sm font-bold">Saya adalah...</h2>
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-28 p-4 text-center border rounded-lg space-y-2">
              <img
                className="w-16 mx-auto"
                src={avatarMale}
                alt="avatar male"
              />
              <p className="text-white text-sm font-bold">Laki - Laki</p>
            </div>
            <div className="w-28 p-4 text-center border rounded-lg space-y-2 hover:bg-pink-500">
              <img
                className="w-16 mx-auto"
                src={avatarFemale}
                alt="avatar female"
              />
              <p className="text-white text-sm font-bold">Perempuan</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <NavButton content="Mulai" />
        </div>
      </div>
    </div>
  )
}
