import React, {
  FC, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsEdit } from 'src/components/Lots'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.primary.light
    }
  })
)

const Item: FC<ILot> = ({ lot }) => {

  const classes = useStyles()
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
            <Card variant='outlined'>
              <CardContent>
                <Typography color='textSecondary' gutterBottom>
                  {lot.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  type='button'
                  onClick={() => handleDelete(lot.id)}
                  size='small'
                  startIcon={<DeleteIcon />}
                >
                  {t('basic.delete')}
                </Button>
                <Button
                  className={classes.button}
                  type='button'
                  onClick={() => setEditMode(true)}
                  size='small'
                  color='primary'
                  startIcon={<EditIcon />}
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
