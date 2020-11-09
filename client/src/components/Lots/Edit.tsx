import React, {
  FC, FormEvent, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionActions from '@material-ui/core/AccordionActions'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Button from '@material-ui/core/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import FormControl from '@material-ui/core/FormControl'
import SaveIcon from '@material-ui/icons/Save'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      padding: theme.spacing(0.25, 2),
    }
  })
)

const LotsEdit: FC<any> = ({ lot, setEditMode }) => {

  const classes = useStyles()
  const { t } = useTranslation()
  const [name, setName] = useState<string>(lot.name)
  const { updateLot } = useContext(LotsContext)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await HTTPclient.put(`/lots/${lot.id}`, {
        name,
      })
      updateLot(response.data)
      setEditMode(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <Accordion expanded TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary
            aria-label={t('aria.expand')}
            aria-controls={t('aria.panelContent', { accordion: lot.name })}
            id={t('aria.panelHeader', { accordion: lot.name })}
            onClick={(e) => {
              e.stopPropagation()
            }}
            onFocus={(e) => e.stopPropagation()}
          >
            <FormControl>
              <TextField
                variant='filled'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder={lot.name}
                required
              />
            </FormControl>
          </AccordionSummary>
          <AccordionActions>
            <Button
              type='button'
              size='small'
              startIcon={<CancelIcon />}
              onClick={() => setEditMode(false)}
            >
              {t('basic.dismiss')}
            </Button>
            <Button
              type='submit'
              size='small'
              color='primary'
              startIcon={<SaveIcon />}
            >
              {t('basic.save')}
            </Button>
          </AccordionActions>
        </Accordion>
      </form>
    </div>
  )
}

export default LotsEdit
