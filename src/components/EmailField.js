import React from 'react'
import { Field } from 'formik'

export default function EmailField({ label, content }) {
  return (
    <div>
      <label htmlFor={label} className="block font-medium mb-1">
        {`${content}: `}
        <span className="text-red-500">*</span>
      </label>
      <Field
        id={label}
        className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
        name={label}
        type="email"
        placeholder="mail@example.com"
        required
      />
    </div>
  )
}
