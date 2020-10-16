import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Lots } from 'src/routes'
import { LotsProvider } from 'src/context/LotsContext'
import 'src/App.css'

const App = () => {
  return (
    <LotsProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/lots' component={Lots} />
        </Switch>
      </Router>
    </LotsProvider>
  )
}

export default App
