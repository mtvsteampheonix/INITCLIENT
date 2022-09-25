import {createTheme} from '@mui/material/styles';
import './utils/font.css';
export const theme = createTheme({
  typography: {
    fontFamily: '"Jua", "sans-serif"'
  },
  palette: {
    primary: {
      main: '#4199e1',
      contrastText: '#fff'
    },
    gray: {
      main: '#A9A9A9',
      contrastText: '#fff'
    },
    initRed: {
      main: '#FF0000',
      contrastText: '#fff'
    }
  }
});
