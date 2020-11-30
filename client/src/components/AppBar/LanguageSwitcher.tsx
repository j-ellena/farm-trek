import React from 'react'
import { useTranslation } from 'react-i18next'
import { useStylesLanguageSwitcher } from 'src/components/AppBar'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import LanguageIcon from '@material-ui/icons/Language'
import Select from '@material-ui/core/Select'

const LanguageSwitcher = () => {

  const classes = useStylesLanguageSwitcher()
  const { i18n } = useTranslation()
  const { supportedLngs } = i18n.options
  
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(e.target.value as string)
    document.documentElement.lang = e.target.value as string
  }

  return (
    <>
      {supportedLngs && (
        <FormControl className={classes.formControl} variant='outlined'>
          <InputLabel htmlFor='language-switcher'>
            <LanguageIcon />
          </InputLabel>
          <Select
            native
            value={i18n.language}
            onChange={handleChange}
            label='language'
            inputProps={{
              name: 'language',
              id: 'language-switcher',
            }}
          >
            {supportedLngs
              .filter((lng: string) => lng !== 'cimode')
              .map((lng: string) => <option key={lng} value={lng}>{lng.toUpperCase()}</option>)}
          </Select>
        </FormControl>
      )}
    </>
  )
}

export default LanguageSwitcher
