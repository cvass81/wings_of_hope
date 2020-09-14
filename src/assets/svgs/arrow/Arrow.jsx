import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Arrow = () => (
  <Grid container alignItems="flex-end">
    <Grid item>
      <Typography component="span" variant="h5">
        <SvgIcon
          classes={useStyles()}
          fontSize="inherit"
          viewBox="0 0 141.73 141.73"
        >
          <path
            style={{ fill: '#FFFFFF' }}
            d="M117.74,123.27L48.8,86.99c-1.08-0.56-2.13-1.77-1.59-3.77c0,0,6.82-25.49,7.07-26.23
	c2.2-6.8,0.64-9.28-1.41-11.51c-2.1-1.84-6.38-1.74-8.34,2.23c-0.95,1.47-1.34,4.83,0.82,7.21l1.3,1.6l-5.81,22.16
	c-0.62,2.25-2.81,2.61-4.11,1.91c0,0-25.96-13.73-28.29-14.96c-1.91-1.59-2.09-5.3,0.23-7.94c0,0,48.3-48.94,48.63-49.14
	c1.74-1.66,4.12-1.34,5.03,0.1c2.09,3.76,12.93,23.46,17.63,32.05c1.29,2.21,2.61,6.49,1.75,9.67s-6.82,25.12-7.24,27.26
	c-0.21,0.62-0.72,2.89-0.57,4.07c0.29,2.66,2.18,4.37,4.44,4.85c7.25,1.36,8.57-6.89,4.99-9.75c-0.09-0.06-0.16-0.13-0.24-0.21
	c-0.9-0.72-1-1.65-0.68-2.69c0.16-0.52,3.14-10.56,3.17-10.65c1.06-3.48,4.6-3.56,5.91-1.44l30.08,55.99
	C123.56,121.48,120.48,124.62,117.74,123.27z"
          />
        </SvgIcon>
      </Typography>
    </Grid>
    <Grid item xs>
      <hr style={{ borderColor: '#FFFFFF' }} />
    </Grid>
  </Grid>
);

export default Arrow;
