import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import KodePage from './components/KodePage'
import TujuanPage from './components/TujuanPage'
import KonsulPage from './components/KonsulPage'
import KritikSaranPage from './components/KritikSaranPage'
import TanyaUstadzPage from './components/TanyaUstadzPage'
import ChatPage from './components/ChatPage'
import InfoKonsultanPage from './components/InfoKonsultanPage'
import FormKonsultanPage from './components/FormKonsultanPage'
import LoginKonsultanPage from './components/LoginKonsultanPage'

// contoh ng kene lurr
function ex amples(){

  const axios = require("axios").default;

  axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem(config.localStorage.dataToken)}`;
  
  axios
        .get(config.urls.events)
        .then((res) => {
          let data = res.data;
          this.events = data.data.reverse();
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.$router.push({ name: "Login" });
          }
        });
  
  axios({
        method: "put",
        url: config.urls.registerFace,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {})
        .catch((err) => {
          callbacks.unauth(err.response.status, err.response.data.message);
        });

  
  let formData = this.formDataCom;
      formData.append("nama", this.nama);
      formData.append("whatsapp", this.whatsapp);
      formData.append("alamat", this.alamat);
      formData.append("tanggal_lahir", this.tanggal_lahir);
      formData.append("status_sekolah", this.status_sekolah);
      formData.append("status_kerja", this.status_kerja);

  let token = localStorage.getItem(config.localStorage.dataToken);
  
  axios({
        method: "post",
        url: config.urls.people,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status == 201) {
            this.statusData = 201;
          }
        })
        .catch((err) => {
          if (err.response.status == 409) {
            this.statusConflict = 409;
            alert("WA terpakai!");
          }
          if (err.response.status == 400) {
            let errors = err.response.data.messages;
            this.errors = errors;
          }
          callbacks.unauth(err.response.status, err.response.data.message);
        }); 
  

}
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
            path="/infokonsultan/regkonsultan"
            component={FormKonsultanPage}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
