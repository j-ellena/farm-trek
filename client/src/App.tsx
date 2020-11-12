import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, Lots } from 'src/routes'
import { Header } from 'src/components/AppBar'

import Grid from '@material-ui/core/Grid'

const App = () => (
  <Router>
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8} container direction='column' alignContent='center' alignItems='center' spacing={2}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lots' component={Lots} />
          </Switch>
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </Grid>
  </Router>
)

export default App
