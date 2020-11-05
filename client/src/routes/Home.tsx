import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from 'src/logo.png'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      height: '90vh'
    },
  })
)

const Home = () => {

  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Grid item container direction='column' alignContent='center' alignItems='center' className={classes.root}>
      <Grid item>
        <Typography variant='h1'>{t('app.name')}</Typography>
      </Grid>
      <Grid item>
        <img src={logo} className='logo' alt='logo' />
      </Grid>
    </Grid>
  )
}

export default Home
