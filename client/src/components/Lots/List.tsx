import React, { useContext, useEffect } from 'react'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsItem } from 'src/components/Lots'

import Grid from '@material-ui/core/Grid'

const LotsList = () => {

    const { lots, setLots } = useContext(LotsContext)

    const getLots = async () => {
        try {
            const response = await HTTPclient.get('/lots')
            setLots(response.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getLots()
    }, [])

    return (
      <>
        {lots.map((lot: Lot) => <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={lot.id}><LotsItem lot={lot} /></Grid>)}
      </>
    )
}

export default LotsList
