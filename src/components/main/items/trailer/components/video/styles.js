import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  measure: {
    width: '100%',
    height: '100%',
    visibility: 'hidden',
    position: 'absolute',
  },
  videoContainer: {
    maxWidth: 600,
  },
  video: {
    padding: 12,
  },
});

export default useStyles;
