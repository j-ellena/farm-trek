import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Lots } from './routes'
import './App.css'

const App = (): JSX.Element => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/lots' component={Lots} />
        </Switch>
      </Router>
  )
}

export default App
