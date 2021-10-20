import React from 'react'
import BackButton from './BackButton'
import logo from '../images/mina-logo.svg'
import { Formik, Field, Form } from 'formik'

export default function FormKonsultanPage() {
  return (
    <div className="h-full bg-launch py-16">
      <div className="relative w-max mx-auto flex flex-col justify-center items-center">
        <div className="w-max absolute -top-6 left-0">
          <BackButton />
        </div>
        <img className="w-32" src={logo} alt="mina logo" />
        <p className="text-xs text-white mt-2 text-light">
          LAYANAN PESAN ANONIM
        </p>
        <div className="w-80 bg-white rounded-lg mt-4 p-4">
          <h1 className="text-dark font-bold text-2xl text-center">
            Form Registrasi <span className="text-green">Consultant</span>
          </h1>
          <div className="mt-6">
            <Formik
              initialValues={{
                namaLengkap: '',
                namaPanggilan: '',
                email: '',
                domisili: '',
                alamatLengkap: '',
                tanggalLahir: '',
                nik: '',
                hobi: '',
                alasanBergabung: '',
                visiMisi: '',
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
              }}
            >
              <Form>
                <label htmlFor="namaLengkap" className="block font-medium mb-1">
                  Nama Lengkap
                </label>
                <Field
                  id="namaLengkap"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="namaLengkap"
                  type="text"
                  placeholder="Nama lengkap"
                />

                <label
                  htmlFor="namaPanggilan"
                  className="block font-medium mb-1"
                >
                  Nama Panggilan
                </label>
                <Field
                  id="namaPanggilan"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="namaPanggilan"
                  type="text"
                  placeholder="Nama panggilan"
                />

                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <Field
                  id="email"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="email"
                  placeholder="example@mail.com"
                  type="email"
                />

                <label htmlFor="domisili" className="block font-medium mb-1">
                  Domisili
                </label>
                <Field
                  id="domisili"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="domisili"
                  type="text"
                  placeholder="Domisili"
                />

                <label
                  htmlFor="alamatLengkap"
                  className="block font-medium mb-1"
                >
                  Alamat Lengkap
                </label>
                <Field
                  id="alamatLengkap"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="alamatLengkap"
                  type="text"
                  placeholder="Alamat lengkap"
                />

                <label
                  htmlFor="tanggalLahir"
                  className="block font-medium mb-1"
                >
                  Tanggal Lahir
                </label>
                <Field
                  id="tanggalLahir"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="tanggalLahir"
                  type="date"
                  placeholder="Alamat lengkap"
                />

                <label htmlFor="nik" className="block font-medium mb-1">
                  NIK
                </label>
                <Field
                  id="nik"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="nik"
                  type="number"
                  placeholder="NIK"
                />

                <label htmlFor="hobi" className="block font-medium mb-1">
                  Hobi
                </label>
                <Field
                  id="hobi"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="hobi"
                  type="text"
                  placeholder="Hobi"
                />

                <label
                  htmlFor="alasanBergabung"
                  className="block font-medium mb-1"
                >
                  Alasan Bergabung
                </label>
                <Field
                  id="alasanBergabung"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="alasanBergabung"
                  type="text"
                  placeholder="Alasan bergabung"
                />

                <label htmlFor="visiMisi" className="block font-medium mb-1">
                  Visi & Misi
                </label>
                <Field
                  id="visiMisi"
                  className="w-full px-4 py-2 border border-green-400 rounded-lg mb-4 "
                  name="visiMisi"
                  type="text"
                  placeholder="Visi & Misi"
                />

                <button
                  className="bg-green w-40 py-2 px-10 rounded-full text-white text-sm font-bold block mx-auto"
                  type="submit"
                >
                  Daftar
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
