import React from 'react'
import { useTranslation } from 'react-i18next'
import logoDark from 'src/logoDark.png'
import logoLight from 'src/logoLight.png'
import { dark } from 'src/theme'
import { useStylesHome } from 'src/routes'

import { useTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const Home = () => {

  const classes = useStylesHome()
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <>
      <Grid item>
        <Typography variant='h1'>{t('app.name')}</Typography>
      </Grid>
      <Grid item>
        <Avatar
          alt='logo'
          src={theme.palette.type === dark ? logoDark : logoLight}
          className={classes.logo}
        />
      </Grid>
    </>
  )
}

export default Home
