import React from 'react'
import BackButton from './BackButton'
import logo from '../images/mina-logo.svg'
import ButtonTer from './NavButtonTer'
import questionMark from '../images/question-mark.png'

export default function InfoKonsultanPage() {
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
            Menjadi bagian dari <span className="text-green">Consultant</span>{' '}
            Team
          </h1>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <img src={questionMark} alt="question mark" />
              <div>
                <h2 className="text-dark font-bold text-lg mb-1">
                  Apa itu Consultant Team?
                </h2>
                <p className="text-dark text-sm">
                  Problem Solver adalah sebuah tim yang bertugas membantu
                  memberikan pemecahan masalah (problem solving) terbaik dalam
                  permasalahan yang dihadapi seseorang.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={questionMark} alt="question mark" />
              <div>
                <h2 className="text-dark font-bold text-lg mb-1">
                  Apa benefit saat berkontribusi menjadi seorang Consultant?
                </h2>
                <p className="text-dark text-sm">
                  Diantara benefit (keuntungan) dari menjadi seorang Problem
                  Solver adalah meraih pahala dengan membantu seseorang dalam
                  menghadapi permasalahan yang dialaminya.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={questionMark} alt="question mark" />
              <div>
                <h2 className="text-dark font-bold text-lg mb-1">
                  Siapa yang dapat menjadi bagian dari tim Consultant?
                </h2>
                <p className="text-dark text-sm">
                  Menjadi seorang Problem Solver merupakan sebuah amanah yang
                  sangat berat yang nantinya menjadi sebuah pertanggung jawaban
                  di akhirat. Karena itu kami menyeleksi dengan seleksi sangat
                  ketat untuk dapat bergabung dengan tim.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <ButtonTer
              content="Lanjut"
              path="/infokonsultan/regkonsultan"
              width="w-40"
              paddingX="px-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
