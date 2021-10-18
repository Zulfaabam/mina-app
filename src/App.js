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
          <Route exact path="/konsultasi/tujuan" component={TujuanPage} />
          <Route exact path="/konsultasi/tujuan/mulai" component={KonsulPage} />
          <Route path="/konsultasi/tujuan/mulai/chat" component={ChatPage} />
          <Route path="/kritiksaran" component={KritikSaranPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
