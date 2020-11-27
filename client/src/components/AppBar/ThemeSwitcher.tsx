import React, { useContext } from 'react'
import { ThemeContext } from 'src/context'
import { useThemeSwitcherStyle } from 'src/components/AppBar'

import IconButton from '@material-ui/core/IconButton'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

const ThemeSwitcher = () => {

  const { toggleTheme } = useContext(ThemeContext)
  const classes = useThemeSwitcherStyle()

  return (
    <IconButton className={classes.toggleButton} onClick={() => toggleTheme()}>
      <NightsStayIcon className={classes.darkIcon} />
      <WbSunnyIcon className={classes.lightIcon} />
    </IconButton>
  )
}

export default ThemeSwitcher
