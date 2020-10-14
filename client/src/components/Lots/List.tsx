import React, { Fragment, useContext, useEffect } from 'react'
import baseUrl from '../../apis/FarmTrekApi'
import { LotsContext } from '../../context/LotsContext'

const LotsList = () => {

    const { lots, setLots } = useContext(LotsContext)

    const getLots = async () => {
        try {
            const response = await fetch(`${baseUrl}/lots`)
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
            LotsList
        </Fragment>
    )
}

export default LotsList