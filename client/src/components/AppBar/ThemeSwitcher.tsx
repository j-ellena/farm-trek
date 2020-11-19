import React, { useContext } from 'react'
import { ThemeContext } from 'src/context'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import { yellow, indigo, blue, lightBlue } from '@material-ui/core/colors'
import { dark } from 'src/theme'

const useStyles = makeStyles((theme: Theme) => createStyles({
  toggle: {
    background: theme.palette.type === dark ? `linear-gradient(${indigo[900]}, ${blue[600]})` : `linear-gradient(${lightBlue[900]}, ${lightBlue[300]})`,
    borderRadius: '30px',
    height: '40px',
    overflow: 'hidden',
  },
  dark: {
    color: yellow[800],
    transition: 'all 0.5s linear',
    transform: theme.palette.type === dark ? 'translateY(0)' : 'translateY(-100px)'
  },
  light: {
    color: yellow[500],
    transition: 'all 0.5s linear',
    transform: theme.palette.type === dark ? 'translateY(100px)' : 'translateY(0)'
  }
}))

const ThemeSwitcher = () => {

  const { toggleTheme } = useContext(ThemeContext)
  const classes = useStyles()

  return (
    <IconButton className={classes.toggle} onClick={() => toggleTheme()}>
      <NightsStayIcon className={classes.dark} />
      <WbSunnyIcon className={classes.light} />
    </IconButton>
  )
}

export default ThemeSwitcher
