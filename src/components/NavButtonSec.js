import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButtonSec({ content }) {
  return (
    <Link to={() => `/${content.replace(/ /g, '')}`}>
      <button className="bg-transparent border border-white w-48 py-2 px-8 rounded-full text-white text-xs font-bold">
        {content}
      </button>
    </Link>
  )
}
