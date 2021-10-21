import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import logo from '../images/mina-logo.svg'
import BackButton from './BackButton'

export default function KritikSaranPage() {
  const [messageSent, setMessageSent] = useState(false)

  let pop

  if (messageSent) {
    pop = (
      <div className="fixed inset-0 bg-black bg-opacity-60">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-min p-4 text-center rounded-xl">
          <h1 className="mb-2 text-gray-500">Pesan terkirim</h1>
          <button
            className="py-2 px-10 rounded-full text-blue-500 text-sm font-bold"
            onClick={() => setMessageSent(false)}
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-launch py-28">
      <div className="relative w-min mx-auto flex flex-col justify-center items-center">
        <div className="w-max absolute -top-10 left-0">
          <BackButton />
        </div>
        <img className="w-48" src={logo} alt="mina logo" />
        <p className="text-sm text-white tracking-wider mt-2 text-light">
          LAYANAN PESAN ANONIM
        </p>
        <h1 className="text-white font-bold text-xl mt-8">
          Kotak Kritik & Saran
        </h1>
        <Formik
          initialValues={{
            textarea: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
          }}
        >
          <Form>
            <label
              htmlFor="textarea"
              className="block font-medium mb-1"
            ></label>
            <Field
              as="textarea"
              id="textarea"
              className="textarea w-80 mt-4 mb-8 p-4 rounded-xl outline-none text-sm"
              name="textarea"
              cols="30"
              rows="10"
              placeholder="Tulis kritik atau saran disini..."
              required
            />

            <button
              className="bg-white w-48 py-2 px-10 rounded-full text-blue-500 text-sm font-bold block mx-auto"
              type="submit"
            >
              Kirim Pesan
            </button>
          </Form>
        </Formik>
      </div>
      {pop}
    </div>
  )
}
