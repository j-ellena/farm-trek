import React, {
  FC, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { ILot } from 'src/interface'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'
import { LotsEdit } from 'src/components/Lots'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionActions from '@material-ui/core/AccordionActions'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      padding: theme.spacing(0.25, 2),
    },
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
            <div className={classes.root}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-label={t('aria.expand')}
                  aria-controls={t('aria.panelContent', { accordion: lot.name })}
                  id={t('aria.panelHeader', { accordion: lot.name })}
                >
                  <Typography>{lot.name}</Typography>
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
                    className={classes.button}
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
            </div>
          )
      }
    </>
  )
}

export default Item
