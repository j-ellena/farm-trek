import React, {
    FC, FormEvent, useContext, useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import HTTPclient from 'src/apis/FarmTrekApi'
import { LotsContext } from 'src/context/LotsContext'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Button from '@material-ui/core/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.primary.light
    }
  })
)

const LotsInput: FC = () => {

    const classes = useStyles()
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
      <Grid item>
        <Card variant='outlined'>
          <form onSubmit={onSubmit}>
            <CardContent>
              <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder={placeholder} required />
            </CardContent>
            <CardActions>
              <Button type='button' onClick={() => setName('')} startIcon={<CancelIcon />}>{t('basic.dismiss')}</Button>
              <Button className={classes.button} type='button' startIcon={<AddCircleIcon />}>{t('basic.add')}</Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    )
}

export default LotsInput
