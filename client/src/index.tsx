import React, { StrictMode, Suspense } from 'react'
import { render } from 'react-dom'
import App from 'src/App'
import reportWebVitals from 'src/reportWebVitals'

import { I18nextProvider } from 'react-i18next'
import i18n from 'src/i18n'

import CssBaseline from '@material-ui/core/CssBaseline'
import 'src/index.css'
import 'fontsource-roboto'

import { LotsProvider, ThemeProvider } from 'src/context'

const rootElement = document.getElementById('root')

render(
  <StrictMode>
    <Suspense fallback='...'>
      <I18nextProvider i18n={i18n}>
        <LotsProvider>
          <ThemeProvider>
            <CssBaseline>
              <App />
            </CssBaseline>
          </ThemeProvider>
        </LotsProvider>
      </I18nextProvider>
    </Suspense>
  </StrictMode>
  , rootElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
