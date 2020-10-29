import React, {
  FC, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsEdit } from 'src/components/Lots'

const Item: FC<ILot> = ({ lot }) => {

  const { t } = useTranslation()
  const { deleteLot } = useContext(LotsContext)
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleDelete = async (id: number) => {
    try {
      HTTPclient.delete(`/lots/${id}`)
      deleteLot(id)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {
        editMode
          ? <LotsEdit lot={lot} setEditMode={setEditMode} />
          :
          <div>
            <span role="button" tabIndex={0} onClick={() => setEditMode(true)} onKeyDown={() => setEditMode(true)}>
              {lot.name}
              <button type='button'>{t('basic.edit')}</button>
            </span>
            <button type='button' onClick={() => handleDelete(lot.id)}>{t('basic.delete')}</button>
          </div>
      }
    </>
  )
}

export default Item
