import React, { Fragment, useContext, useEffect } from 'react'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsItem } from 'src/components/Lots'

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
      <Fragment>
        {lots.map((lot: Lot) => <LotsItem key={lot.id} lot={lot} />)}
      </Fragment>
    )
}

export default LotsList
