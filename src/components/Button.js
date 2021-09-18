import React from 'react'

export default function Button({ content }) {
  return (
    <button className="btn bg-white w-48 py-2 px-10 rounded-full text-blue-500 text-sm font-bold">
      {content}
    </button>
  )
}
