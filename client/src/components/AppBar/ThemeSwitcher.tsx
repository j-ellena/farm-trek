import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from 'src/context'
import { useThemeSwitcherStyle } from 'src/components/AppBar'

import IconButton from '@material-ui/core/IconButton'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Tooltip from '@material-ui/core/Tooltip'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

const ThemeSwitcher = () => {

  const { t } = useTranslation()
  const { toggleTheme } = useContext(ThemeContext)
  const classes = useThemeSwitcherStyle()

  const title = t('theme.toggleTheme')

  return (
    <Tooltip title={title} aria-label={title}>
      <IconButton className={classes.toggleButton} onClick={() => toggleTheme()}>
        <NightsStayIcon className={classes.darkIcon} />
        <WbSunnyIcon className={classes.lightIcon} />
      </IconButton>
    </Tooltip>
  )
}

export default ThemeSwitcher
