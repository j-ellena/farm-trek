import React, {
  FC, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsEdit } from 'src/components/Lots'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const Item: FC<ILot> = ({ lot }) => {

  const { t } = useTranslation()
  const { deleteLot } = useContext(LotsContext)
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleDelete = async (id: number) => {
    try {
      await HTTPclient.delete(`/lots/${id}`)
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
            <Card variant='outlined'>
              <CardContent>
                <Typography color='textSecondary' gutterBottom>
                  {lot.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  type='button'
                  size='small'
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(lot.id)}
                >
                  {t('basic.delete')}
                </Button>
                <Button
                  type='button'
                  size='small'
                  color='primary'
                  startIcon={<EditIcon />}
                  onClick={() => setEditMode(true)}
                >
                  {t('basic.edit')}
                </Button>
              </CardActions>
            </Card>
          )
      }
    </>
  )
}

export default Item
