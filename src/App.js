import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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

// contoh ng kene lurr
// function examples_axios(){

//   const axios = require("axios").default;

//   axios.defaults.headers.common[
//       "Authorization"
//     ] = `Bearer ${localStorage.getItem(config.localStorage.dataToken)}`;

//   axios
//         .get(config.urls.events)
//         .then((res) => {
//           let data = res.data;
//           this.events = data.data.reverse();
//         })
//         .catch((err) => {
//           if (err.response.status == 401) {
//             this.$router.push({ name: "Login" });
//           }
//         });

//   axios({
//         method: "put",
//         url: config.urls.registerFace,
//         data: formData,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then(() => {})
//         .catch((err) => {
//           callbacks.unauth(err.response.status, err.response.data.message);
//         });

//   let formData = this.formDataCom;
//       formData.append("nama", this.nama);
//       formData.append("whatsapp", this.whatsapp);
//       formData.append("alamat", this.alamat);
//       formData.append("tanggal_lahir", this.tanggal_lahir);
//       formData.append("status_sekolah", this.status_sekolah);
//       formData.append("status_kerja", this.status_kerja);

//   let token = localStorage.getItem(config.localStorage.dataToken);

//   axios({
//         method: "post",
//         url: config.urls.people,
//         data: formData,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((res) => {
//           if (res.status == 201) {
//             this.statusData = 201;
//           }
//         })
//         .catch((err) => {
//           if (err.response.status == 409) {
//             this.statusConflict = 409;
//             alert("WA terpakai!");
//           }
//           if (err.response.status == 400) {
//             let errors = err.response.data.messages;
//             this.errors = errors;
//           }
//           callbacks.unauth(err.response.status, err.response.data.message);
//         });

// }

// function examples_socket(){

//   const Client = require("socket.io-client")

//   clientSocket = new Client(`http://localhost:${port}`, {
//             auth: {
//                 token: 'token'
//             }
//         })

//   clientSocket.on('connect_error', (err) => {
//             //
//         })

//   clientSocket.on('authenticated', (arg) => {
//            //
//         })

//   clientSocket.on('joinedRoom', (arg) => {

//   })
//   clientSocket.emit('joinRoom', { chatroomId })

//   clientSocket.on('leftRoom', (arg) => {
//       //
//   })
//   clientSocket.emit('leaveRoom', { chatroomId })

//  clientAnonym.on('newMessage', (arg) => {
//         //
//     })

//  clientConsultant.emit('sendMessage', { chatroomId, message: 'iamconsultant' })

//   clientSocket.close()
// }
// tekan kene

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tanyaustadz" component={TanyaUstadzPage} />
          <Route exact path="/konsultasi" component={KodePage} />
          <Route exact path="/konsultasi/tujuan" component={TujuanPage} />
          <Route exact path="/konsultasi/tujuan/mulai" component={KonsulPage} />
          <Route path="/konsultasi/tujuan/mulai/chat" component={ChatPage} />
          <Route path="/kritiksaran" component={KritikSaranPage} />
          <Route path="/loginkonsultan" component={LoginKonsultanPage} />
          <Route exact path="/infokonsultan" component={InfoKonsultanPage} />
          <Route
            exact
            path="/infokonsultan/regkonsultan"
            component={FormKonsultanPage}
          />
          <Route
            path="/infokonsultan/regkonsultan/selesai"
            component={SelesaiMendaftarPage}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
