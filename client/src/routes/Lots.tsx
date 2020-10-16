import React, { Fragment } from 'react'
import LotsInput from 'src/components/Lots/Input'
import LotsList from 'src/components/Lots/List'

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