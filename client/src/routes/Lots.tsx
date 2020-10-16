import React, { Fragment } from 'react'
import { LotsInput, LotsList } from 'src/components/Lots'

const Lots = () => {
    return (
        <Fragment>
            <h1>Lots</h1>
            <LotsInput />
            <LotsList />
        </Fragment>
    )
}

export default Lots
