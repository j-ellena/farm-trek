import React, { FC, useContext } from 'react'
import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'

const Item: FC<ILot> = ({ lot }) => {

    const { deleteLot } = useContext(LotsContext)

    const handleDelete = async (id: number) => {
        try {
            HTTPclient.delete(`/lots/${id}`)
            deleteLot(id)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            {lot.name}
            <button onClick={() => handleDelete(lot.id)}>Delete</button>
        </div>
    )
}

export default Item
