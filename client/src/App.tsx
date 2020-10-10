import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import Lots from './routes/Lots'

import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/lots' component={Lots} />
      </Switch>
    </Router>
  )
}

export default App;
