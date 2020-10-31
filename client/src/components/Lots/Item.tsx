import React, {
  FC, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsEdit } from 'src/components/Lots'

import Accordion from '@material-ui/core/Accordion'
import AccordionActions from '@material-ui/core/AccordionActions'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
          : (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {lot.name}
              </AccordionSummary>
              <AccordionActions>
                <Button
                  type='button'
                  onClick={() => handleDelete(lot.id)}
                  size='small'
                  startIcon={<DeleteIcon />}
                >
                  {t('basic.delete')}
                </Button>
                <Button
                  type='button'
                  onClick={() => setEditMode(true)}
                  size='small'
                  color='primary'
                  startIcon={<EditIcon />}
                >
                  {t('basic.edit')}
                </Button>
              </AccordionActions>
            </Accordion>
          )
      }
    </>
  )
}

export default Item
