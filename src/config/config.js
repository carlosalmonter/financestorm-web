import colors from './colors';

const config = {
  API_URL: 'http://localhost:8080/api/',
  POST_HEADERS: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  MUI_THEME_PALETTE: {
    palette: {
      primary1Color: colors.WHITE,
      secondaryColor: colors.WHITE,
      primaryTextColor: colors.DARKER_GRAY,
      secondaryTextColor: colors.LIGHT_GRAY,
      accent1Color: colors.DARK_GRAY,
      textColor: colors.LIGHT_GRAY,
    },
  },
  SUCCESS_CODE: 200,
  EMPTY_STRING: '',
  LOADING_ERROR_MESSAGE: 'There was an error loading the data!',
  SIGN_IN_BUTTON_TEXT: 'Sign in',
  REGISTER_IN_BUTTON_TEXT: 'Register',
  DEFAULT_ACCOUNT_TYPE: 'savings',
  ACCOUNT_TYPES: [
    'checking',
    'savings',
    'credit card',
    'cash',
    'loan',
    'other',
  ],
};

export default config;
