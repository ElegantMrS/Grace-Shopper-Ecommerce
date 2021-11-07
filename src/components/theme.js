import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Barlow',
  },
  palette: {
    primary: {
      light: '#fafafa',
      main: '#c7c7c7',
      dark: '#969696',
      contrastText: '#323232',
    },
    secondary: {
      light: '#DF7332',
      main: '#155DE9',
      dark: '#1E7827',
      contrastText: '#323232',
    },
    overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
              background: 'url(/img/martin-sanchez-mIPNylNW2Ks-unsplash.jpg)'
            }
          },
        
        }
      }
  },
});

export default theme;