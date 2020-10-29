import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {

  const { i18n } = useTranslation()
  const { supportedLngs } = i18n.options

  return (
    <div>
      {supportedLngs
        && <select
          value={i18n.language}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value)
            document.documentElement.lang = e.target.value
          }}
        >
          {supportedLngs
            .filter((lng: string) => lng !== 'cimode')
            .map((lng: string) => <option key={lng} value={lng}>{lng.toUpperCase()}</option>)}
           </select>
          }
    </div>
  )
}

export default LanguageSwitcher
