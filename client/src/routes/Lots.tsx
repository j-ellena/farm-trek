import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LotsInput, LotsList } from 'src/components/Lots'

const Lots = () => {

  const { t } = useTranslation()

  return (
    <>
      <Link to='/'>Home</Link>
      <h1>{t('basic.lots')}</h1>
      <LotsInput />
      <LotsList />
    </>
  )
}

export default Lots
