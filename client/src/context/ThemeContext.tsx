import React, { createContext } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { useThemeMode, getTheme } from 'src/theme'

export const ThemeContext = createContext<any>({})

export const ThemeProvider = (props: any) => {

  const { children } = props

  const [isDark, toggleTheme] = useThemeMode()

  const contextValue = {
    isDark, toggleTheme
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={getTheme(isDark)}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
