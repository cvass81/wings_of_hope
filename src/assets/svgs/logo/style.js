import makeStyles from '@material-ui/core/styles/makeStyles';

const width = 7.5;
const heightFactor = 0.54;

const useStyles = makeStyles({
  root: {
    width: `${width}em`,
    height: `${width * heightFactor}em`,
    display: 'block',
  },
});

export default useStyles;
