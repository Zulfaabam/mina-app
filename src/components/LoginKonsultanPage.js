import React from 'react'
import BackButton from './BackButton'
import logo from '../images/mina-logo.svg'
import { Formik, Field, Form } from 'formik'

export default function LoginKonsultanPage() {
  return (
    <div className="h-screen bg-launch py-40">
      <div className="relative w-max mx-auto flex flex-col justify-center items-center">
        <div className="w-max absolute -top-20 left-0">
          <BackButton />
        </div>
        <img className="w-48" src={logo} alt="mina logo" />
        <p className="text-xs text-white mt-2 text-light">
          LAYANAN PESAN ANONIM
        </p>
        <div className="w-80 bg-white rounded-lg mt-8 p-4">
          <h1 className="text-dark font-bold text-2xl text-center">
            <span className="text-green">Consultant</span> Login
          </h1>
          <div className="mt-6">
            <Formik
              initialValues={{
                email: '',
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
              }}
            >
              <Form>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <Field
                  id="email"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="email"
                  placeholder="example@mail.com"
                  type="email"
                  required
                />

                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <Field
                  id="password"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />

                <button
                  className="bg-green w-40 py-2 px-10 rounded-full text-white text-sm font-bold block mx-auto mt-6"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
