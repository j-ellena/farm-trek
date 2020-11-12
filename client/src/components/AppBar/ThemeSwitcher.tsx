import React, { useContext } from 'react'
import { ThemeContext } from 'src/context'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const ThemeSwitcher = () => {

  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <FormControlLabel
      label='theme'
      control={<Switch checked={isDark} onChange={toggleTheme} />}
    />
  )
}

export default ThemeSwitcher
