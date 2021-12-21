import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import KodePage from './pages/KodePage'
import TujuanPage from './pages/TujuanPage'
import KonsulPage from './pages/KonsulPage'
import KritikSaranPage from './pages/KritikSaranPage'
import TanyaUstadzPage from './pages/TanyaUstadzPage'
import ChatPage from './pages/ChatPage'
import InfoKonsultanPage from './pages/InfoKonsultanPage'
import FormKonsultanPage from './pages/FormKonsultanPage'
import LoginKonsultanPage from './pages/LoginKonsultanPage'
import SelesaiMendaftarPage from './pages/SelesaiMendaftarPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tanyaustadz" element={<TanyaUstadzPage />} />
          <Route path="/konsultasi" element={<KodePage />} />
          <Route path="/konsultasi/tujuan" element={<TujuanPage />} />
          <Route path="/konsultasi/tujuan/mulai" element={<KonsulPage />} />
          <Route path="/konsultasi/tujuan/mulai/chat" element={<ChatPage />} />
          <Route path="/kritiksaran" element={<KritikSaranPage />} />
          <Route path="/loginkonsultan" element={<LoginKonsultanPage />} />
          <Route path="/infokonsultan" element={<InfoKonsultanPage />} />
          <Route
            path="/infokonsultan/regkonsultan"
            element={<FormKonsultanPage />}
          />
          <Route
            path="/infokonsultan/regkonsultan/selesai"
            element={<SelesaiMendaftarPage />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
