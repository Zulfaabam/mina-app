import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonTer({ content, path, width, paddingX }) {
  return (
    <Link to={path}>
      <button
        className={`bg-green ${width} py-2 ${paddingX} rounded-full text-white text-sm font-bold`}
      >
        {content}
      </button>
    </Link>
  )
}
