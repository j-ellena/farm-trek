import React, { FC } from 'react'
import { ILot } from 'src/interface'

const Item: FC<ILot> = ({ lot }) => {

    return (
        <div>
            {lot.name}
        </div>
    )
}

export default Item
