import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { LotsInput, LotsList } from 'src/components/Lots'

const Lots = () => {

    return (
        <Fragment>
            <Link to ='/'>Home</Link>
            <h1>Lots</h1>
            <LotsInput />
            <LotsList />
        </Fragment>
    )
}

export default Lots
