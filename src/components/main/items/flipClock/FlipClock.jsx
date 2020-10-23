import React, { useEffect, useReducer, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FlipUnitContainer from './FlipUnitContainer';
import * as C from './constants';
import * as U from './utils';
import useStyles from './styles';
import Video from '../video';

const reducer = (state, { timeAsset, value }) => ({
  ...state,
  [timeAsset]: value,
});

const FlipClock = () => {
  const classes = useStyles();
  const [remainingTime, setRemainingTime] = useState(null);
  const [fullDate, dispatchFullDate] = useReducer(reducer, C.FULL_DATE);

  useEffect(() => {
    const x = setInterval(() => {
      const now = new Date().getTime();
      setRemainingTime(C.DEADLINE - now);
    }, 1000);
    return () => clearInterval(x);
  }, []);

  useEffect(() => {
    if (!remainingTime || remainingTime < 0) {
      return undefined;
    }
    Object.keys(fullDate).forEach(timeAsset => {
      const value = U.timeAssetMapping(timeAsset, remainingTime);
      dispatchFullDate({
        timeAsset,
        value,
      });
    });
  }, [remainingTime]);

  return (
    <div style={{ position: 'relative' }}>
      <Fade in={Boolean(remainingTime > 0)}>
        <div className={classes.flipClockContainer}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Grid
                container
                spacing={1}
                className={classes.flipClock}
                wrap="nowrap"
              >
                {Object.entries(fullDate).map(([timeAsset, value]) => (
                  <Grid item key={timeAsset}>
                    <FlipUnitContainer label={timeAsset} value={value} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h2" component="p">
                STAY TUNED
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Fade>
      <Fade in={Boolean(remainingTime < 0)}>
        <Paper elevation={5} square className={classes.videoContainer}>
          <Video />
        </Paper>
      </Fade>
    </div>
  );
};

export default FlipClock;
