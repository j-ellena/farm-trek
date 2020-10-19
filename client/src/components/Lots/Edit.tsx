import React, { FC, FormEvent, Fragment, useContext, useState } from 'react'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'

const LotsEdit: FC<any> = ({ lot, setEditMode }) => {

    const [name, setName] = useState(lot.name)
    const { updateLot } = useContext(LotsContext)

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await HTTPclient.put(`/lots/${lot.id}`, {
                name
            })
            updateLot(response.data)
            setEditMode(false)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder={lot.name} required />
                <button type='submit'>Save</button>
                <button type='button' onClick={() => setEditMode(false)}>Dismiss</button>
            </form>
        </Fragment>
    )
}

export default LotsEdit