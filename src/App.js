import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import KonsulPage from './components/KonsulPage'
import KritikSaranPage from './components/KritikSaranPage'
import ChatPage from './components/ChatPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/konsultasi" component={KonsulPage} />
          <Route path="/kritik&saran" component={KritikSaranPage} />
          <Route path="/mulai" component={ChatPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
