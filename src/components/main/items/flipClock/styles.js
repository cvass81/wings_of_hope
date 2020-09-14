import makeStyles from '@material-ui/core/styles/makeStyles.js';

const useStyles = makeStyles(theme => {
  const borderRadius = 6;
  const color = '#FFFFFF';
  const backgroundColor = '#333333';
  const borderColor = '#111111';
  const clockSize = 100;
  const clockSizeMd = 90;
  const clockSizeSm = 67;
  const clockSizeXs = 55;
  const fontFactor = 0.8;
  const clockDimensions = {
    width: clockSize,
    height: clockSize,
    [theme.breakpoints.only('md')]: {
      width: clockSizeMd,
      height: clockSizeMd,
    },
    [theme.breakpoints.only('sm')]: {
      width: clockSizeSm,
      height: clockSizeSm,
    },
    [theme.breakpoints.only('xs')]: {
      width: clockSizeXs,
      height: clockSizeXs,
    },
  };
  const fontSize = {
    fontSize: clockSize * fontFactor,

    [theme.breakpoints.only('md')]: {
      fontSize: clockSizeMd * fontFactor,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: clockSizeSm * fontFactor,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: clockSizeXs * fontFactor,
    },
  };

  return {
    caption: {
      textTransform: 'uppercase',
    },
    flipClock: {
      marginTop: theme.spacing(1),
    },
    flipUnitContainer: {
      position: 'relative',
      ...clockDimensions,
      perspective: 800,
      perspectiveOrigin: 'left',
      backgroundColor,
      borderRadius,
      boxShadow: '0 0 10px #000000 inset',
      fontFamily: 'HelveticaNeue Bold',
    },
    upperCard: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      width: '100%',
      height: '50%',
      overflow: 'hidden',
      border: '1px solid',
      alignItems: 'flex-end',
      borderBottom: '0.5px solid',
      borderColor,
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      '& span': {
        ...fontSize,
        color,
        transform: 'translateY(50%)',
      },
    },
    lowerCard: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      width: '100%',
      height: '50%',
      overflow: 'hidden',
      border: '1px solid',
      borderColor,
      alignItems: 'flex-start',
      borderTop: '0.5px solid',
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      '& span': {
        ...fontSize,
        color,
        transform: 'translateY(-50%)',
      },
    },
    flipCard: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '50%',
      overflow: 'hidden',
      backfaceVisibility: 'hidden',
      '& span': {
        ...fontSize,
        color,
      },
      '&$unfold': {
        top: '50%',
        alignItems: 'flex-start',
        transformOrigin: '50% 0%',
        transform: 'rotateX(180deg)',
        backgroundColor,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        border: '0.5px solid',
        borderTop: '0.5px solid',
        borderColor,
        '& span': {
          transform: 'translateY(-50%)',
        },
      },
      '&$fold': {
        top: '0%',
        alignItems: 'flex-end',
        transformOrigin: '50% 100%',
        transform: 'rotateX(0deg)',
        backgroundColor,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        border: '0.5px solid',
        borderTop: '0.5px solid',
        borderColor,
        '& span': {
          transform: 'translateY(50%)',
        },
      },
    },
    fold: {
      animation:
        '$fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards',
      transformStyle: 'preserve-3d',
    },
    unfold: {
      animation:
        '$unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards',
      transformStyle: 'preserve-3d',
    },
    '@keyframes fold': {
      '0%': {
        transform: 'rotateX(0deg)',
      },
      '100%': {
        transform: 'rotateX(-180deg)',
      },
    },
    '@keyframes unfold': {
      '0%': {
        transform: 'rotateX(180deg)',
      },
      '100%': {
        transform: 'rotateX(0deg)',
      },
    },
  };
});

export default useStyles;
