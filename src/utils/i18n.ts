import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUS from '@/assets/locales/en.json'
import zhCN from '@/assets/locales/zh-CN.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enUS,
      },
      zh: {
        translation: zhCN,
      },
    },
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n