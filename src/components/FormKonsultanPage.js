import React, { useState } from 'react'
import BackButton from './BackButton'
import logo from '../images/mina-logo.svg'
import { Formik, Field, Form } from 'formik'
import InputField from './InputField'
import EmailField from './EmailField'
import { NavLink } from 'react-router-dom'

export default function FormKonsultanPage() {
  const [message, setMessage] = useState(false)

  let pop

  if (message) {
    pop = (
      <div className="fixed inset-0 bg-black bg-opacity-60">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-min p-4 text-center rounded-xl">
          <h1 className="mb-2 text-gray-500">Anda yakin akan mendaftar?</h1>
          <div>
            <NavLink to="/infokonsultan/regkonsultan/selesai">
              <button className="py-2 px-10 rounded-full text-blue-500 text-sm font-bold">
                Ya
              </button>
            </NavLink>
            <button
              className="py-2 px-10 rounded-full text-blue-500 text-sm font-bold"
              onClick={() => setMessage(false)}
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
    )
  }

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
        <div className="w-80 md:w-96 bg-white rounded-lg mt-4 p-4">
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
                // alert(JSON.stringify(values, null, 2))
                setMessage(true)
              }}
            >
              <Form>
                <InputField
                  label="namaLengkap"
                  content="Nama Lengkap"
                  type="text"
                />
                <InputField
                  label="namaPanggilan"
                  content="Nama Panggilan"
                  type="text"
                />
                <EmailField label="email" content="Email" />
                <InputField label="domisili" content="Domisili" type="text" />
                <InputField
                  label="alamatLengkap"
                  content="Alamat Lengkap"
                  type="text"
                />
                <InputField
                  label="tanggalLahir"
                  content="Tanggal Lahir"
                  type="date"
                />
                <InputField label="nik" content="NIK" type="number" />
                <InputField label="hobi" content="Hobi" type="text" />
                <InputField
                  label="alasanBergabung"
                  content="Alasan Bergabung"
                  type="text"
                />
                <InputField
                  label="visiMisi"
                  content="Visi dan Misi"
                  type="text"
                />

                <label className="text-sm">
                  <Field
                    type="checkbox"
                    name="toggle"
                    className="ml-1 mr-3 transform scale-150"
                    required
                  />
                  Dengan ini, <strong>saya siap menanggung beban amanah</strong>{' '}
                  dan <strong>siap menerima konsekuensi</strong> apabila saya
                  melakukan pelanggaran.
                </label>

                <button
                  className="bg-green w-40 py-2 px-10 rounded-full text-white text-sm font-bold block mx-auto mt-6"
                  type="submit"
                >
                  Daftar
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      {pop}
    </div>
  )
}
