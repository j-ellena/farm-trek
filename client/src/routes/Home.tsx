import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from 'src/logo.png'

import Typography from '@material-ui/core/Typography'

const Home = () => {

  const { t } = useTranslation()

  return (
    <div className='home'>
      <Typography>{t('app.name')}</Typography>
      <img src={logo} className='logo' alt='logo' />
    </div>
  )
}

export default Home
