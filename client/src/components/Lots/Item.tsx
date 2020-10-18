import React, { FC, Fragment, useContext, useState } from 'react'
import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsEdit } from 'src/components/Lots'

const Item: FC<ILot> = ({ lot }) => {

    const { deleteLot } = useContext(LotsContext)
    const [editMode, setEditMode] = useState(false)

    const handleDelete = async (id: number) => {
        try {
            HTTPclient.delete(`/lots/${id}`)
            deleteLot(id)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Fragment>
            {editMode
                ?
                <LotsEdit lot={lot} setEditMode={setEditMode} />
                :
                <div>
                    <span onClick={() => setEditMode(true)}>
                        {lot.name}
                        <button type='button'>Edit</button>
                    </span>
                    <button type='button' onClick={() => handleDelete(lot.id)}>Delete</button>
                </div>
            }
        </Fragment >
    )
}

export default Item
