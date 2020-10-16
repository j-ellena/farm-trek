import React, { FormEvent, Fragment } from 'react'

const LotsInput = () => {

    const placeholder = 'Input new lot'

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <form>
                <input type='text' onChange={e => console.log(e.target.value)} placeholder={placeholder} required />
                <button type='submit'>Add</button>
            </form>
        </Fragment>
    )
}

export default LotsInput
