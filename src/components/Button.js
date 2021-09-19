import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ content }) {
  return (
    <Link to={() => `/${content.replace(/ /g, '')}`}>
      <button className="bg-white w-48 py-2 px-10 rounded-full text-blue-500 text-sm font-bold">
        {content}
      </button>
    </Link>
  )
}
