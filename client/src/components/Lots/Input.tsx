import React, {
    FC, FormEvent, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'

const LotsInput: FC = () => {

    const { t } = useTranslation()
    const [name, setName] = useState<string>('')
    const { addLot } = useContext(LotsContext)

    const placeholder = t('lots.placeholderNew')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await HTTPclient.post('/lots', {
                name,
            })
            addLot(response.data)
            setName('')
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
      <>
        <form onSubmit={onSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder={placeholder} required />
          <button type='submit'>{t('basic.add')}</button>
          {name
            && <button type='button' onClick={() => setName('')}>{t('basic.dismiss')}</button>}
        </form>
      </>
    )
}

export default LotsInput
