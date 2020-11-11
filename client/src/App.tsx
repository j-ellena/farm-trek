import React, { StrictMode, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { MuiThemeProvider } from '@material-ui/core/styles'
import i18n from 'src/i18n'
import { Home, Lots } from 'src/routes'
import { Header } from 'src/components/AppBar'
import { LotsProvider } from 'src/context'
import { getTheme } from 'src/theme'
import 'src/App.css'
import 'fontsource-roboto'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

const App = () => (
  <StrictMode>
    <Suspense fallback='...'>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={getTheme()}>
          <CssBaseline>
            <LotsProvider>
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
            </LotsProvider>
          </CssBaseline>
        </MuiThemeProvider>
      </I18nextProvider>
    </Suspense>
  </StrictMode>
)

export default App
