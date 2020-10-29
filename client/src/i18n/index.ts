import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const fallbackLng = 'en'
const supportedLngs = ['hr', 'en', 'de']
const detection = {
  order: ['querystring', 'cookie', 'localStorage', 'htmlTag'],
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
}

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng,
    supportedLngs,
    detection,
    debug: process.env.NODE_ENV === 'development',
  })

export default i18n
