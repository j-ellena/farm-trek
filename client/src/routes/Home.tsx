import React from 'react'
import { useTranslation } from 'react-i18next'
import logoDark from 'src/logoDark.png'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Home = () => {

  const { t } = useTranslation()

  return (
    <>
      <Grid item>
        <Typography variant='h1'>{t('app.name')}</Typography>
      </Grid>
      <Grid item>
        <img src={logoDark} className='logo' alt='logo' />
      </Grid>
    </>
  )
}

export default Home
