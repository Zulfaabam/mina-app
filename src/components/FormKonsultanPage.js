import React from 'react'
import BackButton from './BackButton'
import logo from '../images/mina-logo.svg'
import { Formik, Field, Form } from 'formik'
import InputField from './InputField'
import EmailField from './EmailField'

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
                alert(JSON.stringify(values, null, 2))
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
                  content="Visi & Misi"
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
    </div>
  )
}
