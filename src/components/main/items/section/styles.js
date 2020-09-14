import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
  },
  airplaneContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(12),
  },
  airplane: {
    width: '11em',
  },
  wingText: {
    marginTop: '-2em',
    marginLeft: '-3.3em',
    fontWeight: 700,
  },
  container: {
    display: 'grid',
    gridTemplate: 'auto',
    gridTemplateAreas: `'hr' 'heading' 'paragraph' 'thumbnail'`,
    rowGap: `${theme.spacing(2)}px`,
    [theme.breakpoints.up('sm')]: {
      rowGap: `${theme.spacing(3)}px`,
      gridTemplateColumns: 'min-content auto',
      gridTemplateRows: 'auto auto',
      gridTemplateAreas: `'heading hr' 'paragraph thumbnail'`,
    },
    [theme.breakpoints.only('sm')]: {
      gridTemplate: 'auto',
      gridTemplateAreas: `'heading hr' 'paragraph paragraph' 'thumbnail thumbnail'`,
    },
    [theme.breakpoints.only('md')]: {
      rowGap: `${theme.spacing(4)}px`,
    },
    [theme.breakpoints.up('lg')]: {
      rowGap: `${theme.spacing(5)}px`,
    },
  },
  heading: {
    gridArea: 'heading',
    alignSelf: 'end',
  },
  hr: {
    gridArea: 'hr',
    alignSelf: 'end',
  },
  paragraph: {
    gridArea: 'paragraph',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(3),
    },
  },
  thumbnail: {
    gridArea: 'thumbnail',
  },
  image: {
    maxWidth: '100%',
  },
  titleOnlyContainer: {
    display: 'grid',
    gridTemplateAreas: `'hr' 'heading'`,
    rowGap: `${theme.spacing(2)}px`,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      gridTemplateAreas: `'heading hr'`,
      gridTemplateColumns: 'min-content auto',
    },
    [theme.breakpoints.only('md')]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(5),
    },
  },
  textArea: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    ...theme.typography.body1,
    '&::placeholder': {
      color: fade(theme.palette.text.primary, 0.5),
    },
  },
  textAreaLabel: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    borderBottom: '1px solid',
    color: fade(theme.palette.text.primary, 0.5),
    borderColor: fade(theme.palette.text.primary, 0.5),
  },
}));

export default useStyles;
