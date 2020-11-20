import React from 'react'
import { useTranslation } from 'react-i18next'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import LanguageIcon from '@material-ui/icons/Language'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      '& .MuiFormControl-root': {
        height: '25px',
      },
      '& .MuiInputLabel-formControl': {
        left: '25%',
      }
    }
  }),
)

const LanguageSwitcher = () => {

  const classes = useStyles()
  const { i18n } = useTranslation()
  const { supportedLngs } = i18n.options
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(e.target.value as string)
    document.documentElement.lang = e.target.value as string
  }

  return (
    <div>
      {
        supportedLngs
        && (
          <>
            <FormControl
              variant='outlined'
              className={classes.formControl}
            >
              <InputLabel htmlFor='outlined-age-native-simple'><LanguageIcon /></InputLabel>
              <Select
                native
                value={i18n.language}
                onChange={handleChange}
                label='language'
                inputProps={{
                  name: 'language',
                  id: 'outlined-age-native-simple',
                }}
              >
                {supportedLngs
                  .filter((lng: string) => lng !== 'cimode')
                  .map((lng: string) => <option key={lng} value={lng}>{lng.toUpperCase()}</option>)}
              </Select>
            </FormControl>
          </>
        )
      }
    </div>
  )
}

export default LanguageSwitcher
