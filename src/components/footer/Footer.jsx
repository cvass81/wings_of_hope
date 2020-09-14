import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import operationBookBg from '../../assets/images/operation_book.jpg';
import { Logo } from '../../assets/svgs';
import useStyles from './styles';
import Social from '../../modules';

const Footer = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.footer}
      style={{
        backgroundImage: `url(${operationBookBg})`,
      }}
    >
      <div className={classes.bgOverlay} />
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
        className={classes.section}
      >
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography align="center" variant="subtitle1" component="div">
                <Logo />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" component="div" align="center">
                &ldquo;Η τελειότητα είναι παιδί της δοκιμής&rdquo;
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Social />
        </Grid>
        <Grid item>
          <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item>
              <Typography variant="body2">
                Copyright&copy; 2020 - GRAFAS DIVING
              </Typography>
            </Grid>
            <Grid item>
              <Typography>|</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Designed by FERROFLUID STUDIO
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
