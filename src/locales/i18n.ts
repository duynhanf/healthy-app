import i18n from 'i18next';
import ja from './ja.json';

const DEFAULT_LANGUAGE = 'ja';

const app18nInstance = i18n.createInstance();

app18nInstance.init({
  resources: {
    ja: { translation: ja },
  },
  fallbackLng: DEFAULT_LANGUAGE,

  interpolation: {
    escapeValue: false,
  },
});

export default app18nInstance;
