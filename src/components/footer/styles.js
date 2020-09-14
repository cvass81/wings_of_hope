import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  footer: {
    overflow: 'hidden',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    position: 'relative',
  },
  section: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
    position: 'relative',
    zIndex: 10,
  },
  bgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,.5), black)',
  },
}));

export default useStyles;
