import React from 'react'
import logo from '../images/mina-logo.svg'
import avatarMale from '../images/avatar-male.png'
import avatarFemale from '../images/avatar-female.png'
import Button from './Button'

export default function KonsulPage() {
  return (
    <div className="h-screen bg-laki">
      <img src={logo} alt="mina logo" />
      <h2>Mohon isi dengan jujur...</h2>
      <p>
        “Wahai orang-orang yang beriman! Bertakwalah kepada Allah, dan
        bersamalah kamu dengan <strong>orang-orang yang jujur</strong> (benar).”
        (QS. At-Taubah: 119)
      </p>
      <h2>Saya adalah...</h2>
      <div>
        <div>
          <img src={avatarMale} alt="avatar male" />
          <p>Laki - Laki</p>
        </div>
        <div>
          <img src={avatarFemale} alt="avatar female" />
          <p>Perempuan</p>
        </div>
      </div>
      <Button content="Mulai" />
    </div>
  )
}
