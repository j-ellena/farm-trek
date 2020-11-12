import React from 'react'
import { useTranslation } from 'react-i18next'
import logoDark from 'src/logoDark.png'
import logoLight from 'src/logoLight.png'

import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: theme.spacing(24),
      height: theme.spacing(24),
      [theme.breakpoints.down('sm')] : {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
      [theme.breakpoints.up('lg')] : {
        width: theme.spacing(42),
        height: theme.spacing(42),
      },
      pointerEvents: 'none',
    },
  }),
)

const Home = () => {

  const classes = useStyles()
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <>
      <Grid item>
        <Typography variant='h1'>{t('app.name')}</Typography>
      </Grid>
      <Grid item>
        <Avatar
          alt='logo'
          src={theme.palette.type === 'dark' ? logoDark : logoLight}
          className={classes.logo}
        />
      </Grid>
    </>
  )
}

export default Home
