import { Formik, Field, Form } from 'formik'
import React, { useState } from 'react'
import logo from '../images/mina-logo.svg'
import BackButton from './BackButton'
import TextArea from './TextArea'

export default function TanyaUstadzPage() {
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
        <h1 className="text-white font-bold text-xl mt-8">Tanya Ustadz</h1>
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
            <TextArea content="Tulis pertanyaan disini..." />

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
