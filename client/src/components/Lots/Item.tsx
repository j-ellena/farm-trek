import React, { FC, useContext } from 'react'
import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'

const Item: FC<ILot> = ({ lot }) => {

    const { lots, setLots } = useContext(LotsContext)

    const deleteLot = async (id: number) => {
        try {
            HTTPclient.delete(`/lots/${id}`)
            setLots(lots.filter((lot: Lot) => lot.id !== id))
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            {lot.name}
            <button onClick={() => deleteLot(lot.id)} >Delete</button>
        </div>
    )
}

export default Item
