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
  EMPTY_STRING: '',
  LOADING_ERROR_MESSAGE: 'There was an error loading the data!',
};

export default config;
