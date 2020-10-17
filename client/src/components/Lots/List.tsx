import React, { Fragment, useContext, useEffect } from 'react'
import serverUrl from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsItem } from 'src/components/Lots'

const LotsList = () => {

    const { lots, setLots } = useContext(LotsContext)

    const getLots = async () => {
        try {
            const response = await fetch(`${serverUrl}/lots`)
            const jsonData = await response.json()
            setLots(jsonData)
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
