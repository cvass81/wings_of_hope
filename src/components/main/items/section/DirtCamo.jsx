import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlipClock from '../flipClock';
import airplane from '../../../../assets/images/aeroplano.png';
import useStyles from './styles';

const DirtCamo = () => {
  const classes = useStyles();
  return (
    <Box color="text.secondary">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        className={classes.section}
      >
        <Grid item>
          <Grid
            container
            alignItems="center"
            wrap="nowrap"
            className={classes.airplaneContainer}
          >
            <Grid item>
              <Typography variant="h3">
                <img
                  src={airplane}
                  alt="Airplane"
                  className={classes.airplane}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component="h2"
                variant="h3"
                className={classes.wingText}
                noWrap
              >
                A
                <br />
                STORY
                <br />
                OF BRAVERY
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center">
            DOCUMENTARY
          </Typography>
          <Typography variant="h1" align="center">
            WINGS OF HOPE
          </Typography>
        </Grid>
        <Grid item>
          <FlipClock />
        </Grid>
        <Grid item>
          <Typography variant="h2" component="p">
            STAY TUNED
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DirtCamo;
