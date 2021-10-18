import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonSec({ content, path, width, paddingX }) {
  return (
    <Link to={path}>
      <button
        className={`bg-transparent border border-white ${width} ${paddingX} py-2 rounded-full text-white text-xs font-bold`}
      >
        {content}
      </button>
    </Link>
  )
}
