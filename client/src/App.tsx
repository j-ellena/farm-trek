import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Lots } from './routes'
import { LotsProvider } from './context/LotsContext'
import './App.css'

const App = (): JSX.Element => {
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
