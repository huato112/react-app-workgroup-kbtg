import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translations
import enCommon from './locales/en/common.json'
import enUsers from './locales/en/users.json'

const resources = {
  en: {
    common: enCommon,
    users: enUsers,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },
  })

export default i18n
