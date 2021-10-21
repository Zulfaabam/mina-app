import React from 'react'
import { Field } from 'formik'

export default function TextArea({ content }) {
  return (
    <div>
      <label htmlFor="textarea" className="block font-medium mb-1"></label>
      <Field
        as="textarea"
        id="textarea"
        className="textarea w-80 mt-4 mb-8 p-4 rounded-xl outline-none text-sm"
        name="textarea"
        cols="30"
        rows="10"
        placeholder={content}
        required
      />
    </div>
  )
}
