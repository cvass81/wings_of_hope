import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0F3355',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: {
      fontFamily: ['GFS Neohellenic Bold'].join(','),
      fontSize: 78,
      // fontSize: 78,
      fontWeight: 700,
      letterSpacing: '0.08em',
      lineHeight: 1,
    },
    h2: {
      fontFamily: ['HelveticaNeue Bold'].join(','),
      fontSize: 35,
      lineHeight: 1,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: ['GFS Neohellenic Regular'].join(','),
      fontSize: 21,
      // fontSize: 21,
      lineHeight: 1,
    },
    h4: {
      fontFamily: ['Montserrat Light'].join(','),
      fontSize: 16,
      fontWeight: 600,
      // fontSize: 18,
    },
    h5: {
      fontFamily: ['HelveticaNeue Bold'].join(','),
      fontSize: 31,
      lineHeight: 1,
      letterSpacing: '-0.016em',
    },
    body1: {
      fontFamily: ['HelveticaNeue Light'].join(','),
      fontSize: 18,
      lineHeight: 1.36,
    },
    body2: {
      fontFamily: ['HelveticaNeue Light'].join(','),
      fontSize: 16,
      lineHeight: 1.28,
    },
    button: {
      fontFamily: ['HelveticaNeue Medium'].join(','),
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 38,
    },
    subtitle2: {
      fontFamily: ['CF Note Bold'].join(','),
      fontSize: 43,
      lineHeight: 1.28,
    },
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: '3.1rem',
      },
      fontSizeLarge: {
        fontSize: '5.4rem',
      },
    },
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, .18)',
        },
        textTransform: 'initial',
      },
      outlined: {
        borderColor: '#FFFFFF',
        borderRadius: 0,
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, .18)',
        },
      },
      label: {
        opacity: 0.5,
      },
    },
    MuiTextField: {
      root: {
        '& label': {
          fontFamily: ['Montserrat Light'].join(','),
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 600,
        },
        '& label.Mui-focused': {
          color: '#FFFFFF',
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: '#FFFFFF',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#FFFFFF',
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
