import React, { StrictMode, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { MuiThemeProvider } from '@material-ui/core/styles'
import i18n from 'src/i18n'
import { Home, Lots } from 'src/routes'
import { LanguageSwitcher } from 'src/components/Navbar'
import { LotsProvider } from 'src/context/LotsContext'
import theme from 'src/theme'
import 'src/App.css'
import 'fontsource-roboto'

const App = () => (
  <StrictMode>
    <Suspense fallback='...'>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <LotsProvider>
            <LanguageSwitcher />
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/lots' component={Lots} />
              </Switch>
            </Router>
          </LotsProvider>
        </MuiThemeProvider>
      </I18nextProvider>
    </Suspense>
  </StrictMode>
)

export default App
