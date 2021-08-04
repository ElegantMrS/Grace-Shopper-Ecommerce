import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#b6ffff',
      main: '#df7332',
      dark: '#1E7827',
      contrastText: '#323232',
    },
    secondary: {
      light: '#C71212',
      main: '#155de9',
      dark: '#0035b6',
      contrastText: '#C7C7C7',
    },
    overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
              background: '#323232'
            }
          }
        }
      }
  },
});

export default theme;