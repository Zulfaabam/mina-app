import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ content, path, width, paddingX }) {
  return (
    <Link to={path}>
      <button
        className={`bg-white ${width} py-2 ${paddingX} rounded-full text-blue-500 text-sm font-bold`}
      >
        {content}
      </button>
    </Link>
  )
}
