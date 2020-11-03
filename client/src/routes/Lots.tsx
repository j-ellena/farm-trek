import React from 'react'
import { useTranslation } from 'react-i18next'
import { LotsInput, LotsList } from 'src/components/Lots'

const Lots = () => {

  const { t } = useTranslation()

  return (
    <>
      <h1>{t('basic.lots')}</h1>
      <LotsInput />
      <LotsList />
    </>
  )
}

export default Lots
