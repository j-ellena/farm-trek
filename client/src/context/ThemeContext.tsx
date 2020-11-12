import React, {
  // useState,
  createContext
} from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
// import { getTheme, useThemeMode } from 'src/theme'
import { getTheme } from 'src/theme'

// const [isDark] = useThemeMode()

export const ThemeContext = createContext({
  // {
  //     currentTheme: 'normal',
  //     setTheme: null,
  // },
}
)

export const ThemeProvider = (props: any) => {

  const { children } = props

  // const currentTheme = localStorage.getItem('appTheme') || 'normal'

  // const [themeName, setThemeName] = useState(currentTheme)

  // const theme = getTheme()

  // const setTheme = (name: any) => {
  //     localStorage.setItem('appTheme', name)
  //     setThemeName(name)
  // }

  // const contextValue = {
  //     currentTheme: themeName,
  //     setTheme,
  // }

  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      <MuiThemeProvider theme={getTheme()}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
