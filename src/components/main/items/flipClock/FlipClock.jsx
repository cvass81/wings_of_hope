import React, { useEffect, useReducer, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import FlipUnitContainer from './FlipUnitContainer';
import * as C from './constants';
import * as U from './utils';
import useStyles from './styles';

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
    if (!remainingTime) {
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
    <Fade in={Boolean(remainingTime)}>
      <Grid container spacing={1} className={classes.flipClock}>
        {Object.entries(fullDate).map(([timeAsset, value]) => (
          <Grid item key={timeAsset}>
            <FlipUnitContainer label={timeAsset} value={value} />
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
};

export default FlipClock;
