import React, { FormEvent, Fragment, useContext, useState } from 'react'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'

const LotsInput = () => {

    const [name, setName] = useState('')
    const { addLot } = useContext(LotsContext)

    const placeholder = 'Input new lot'

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await HTTPclient.post('/lots', {
                name
            })
            addLot(response.data)
            setName('')
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder={placeholder} required />
                <button type='submit'>Add</button>
            </form>
        </Fragment>
    )
}

export default LotsInput
