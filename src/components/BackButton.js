import React from 'react'
import arrow from '../images/arrow-back.svg'
import { useHistory } from 'react-router-dom'

export default function BackButton() {
  let history = useHistory()

  return (
    <div className="w-max cursor-pointer" onClick={() => history.goBack()}>
      <img className="w-6" src={arrow} alt="arrow back" />
    </div>
  )
}
