import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  let navigate = useNavigate()

  return (
    <div
      className="w-max text-white cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <HiArrowLeft className="text-lg" />
    </div>
  )
}
