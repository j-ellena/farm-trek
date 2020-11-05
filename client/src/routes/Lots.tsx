import React from 'react'
import { useTranslation } from 'react-i18next'
import { LotsInput, LotsList } from 'src/components/Lots'

import Grid from '@material-ui/core/Grid'

const Lots = () => {

  const { t } = useTranslation()

  return (
    <>
      <h1>{t('basic.lots')}</h1>
      <LotsInput />
      <Grid item container spacing={1}><LotsList /></Grid>
    </>
  )
}

export default Lots
