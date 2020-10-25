import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/i18n'
import { Home, Lots } from 'src/routes'
import { LanguageSwitcher } from 'src/components/Navbar'
import { LotsProvider } from 'src/context/LotsContext'
import 'src/App.css'

const App = () => (
    <Suspense fallback='...'>
      <I18nextProvider i18n={i18n}>
        <LotsProvider>
          <LanguageSwitcher />
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/lots' component={Lots} />
            </Switch>
          </Router>
        </LotsProvider>
      </I18nextProvider>
    </Suspense>
  )

export default App
