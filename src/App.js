import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import KodePage from './components/KodePage'
import TujuanPage from './components/TujuanPage'
import KonsulPage from './components/KonsulPage'
import KritikSaranPage from './components/KritikSaranPage'
import TanyaUstadzPage from './components/TanyaUstadzPage'
import ChatPage from './components/ChatPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tanyaustadz" component={TanyaUstadzPage} />
          <Route exact path="/konsultasi" component={KodePage} />
          <Route exact path="/konsultasi/lanjut" component={TujuanPage} />
          <Route path="/konsultasi/lanjut/lanjut2" component={KonsulPage} />
          <Route path="/kritik&saran" component={KritikSaranPage} />
          <Route path="/mulai" component={ChatPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
