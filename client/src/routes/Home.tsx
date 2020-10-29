import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from 'src/logo.png'

const Home = () => {

    const { t } = useTranslation()

    return (
      <div className='home'>
        <Link to='/lots'>{t('basic.lots')}</Link>
        <code>{t('app.name')}</code>
        <img src={logo} className='logo' alt='logo' />
      </div>
    )
}

export default Home
