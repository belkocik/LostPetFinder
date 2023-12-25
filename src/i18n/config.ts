import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

import plTranslation from './pl/plTranslation.json';
import enTranslation from './en/enTranslation.json';

i18next
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: enTranslation,
      },
      pl: {
        translation: plTranslation,
      },
    },
  });
