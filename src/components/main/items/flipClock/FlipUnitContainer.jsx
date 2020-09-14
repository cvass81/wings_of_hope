import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import * as U from './utils';

const FlipUnitContainer = ({ label, value: valueFromProps }) => {
  const classes = useStyles();
  const [value, setValue] = useState(valueFromProps);
  const [digit1, setDigit1] = useState(value);
  const [digit2, setDigit2] = useState(value - 1);

  useEffect(() => {
    if (digit1 > digit2) {
      setDigit1(valueFromProps);
      setDigit2(valueFromProps + 1);
    } else {
      setDigit1(valueFromProps + 1);
      setDigit2(valueFromProps);
    }
    setValue(valueFromProps);
  }, [valueFromProps]);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <div className={classes.flipUnitContainer}>
          <div className={classes.upperCard}>
            <span>{U.valueVisualization(label, value)}</span>
          </div>
          <div className={classes.lowerCard}>
            <span>{U.valueVisualization(label, value + 1)}</span>
          </div>
          <div
            className={cx(classes.flipCard, {
              [classes.unfold]: digit1 > digit2,
              [classes.fold]: digit1 < digit2,
            })}
          >
            <span>{U.valueVisualization(label, digit2)}</span>
          </div>
          <div
            className={cx(classes.flipCard, {
              [classes.unfold]: digit1 < digit2,
              [classes.fold]: digit1 > digit2,
            })}
          >
            <span>{U.valueVisualization(label, digit1)}</span>
          </div>
        </div>
      </Grid>
      <Grid item>
        <Typography variant="caption" className={classes.caption}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FlipUnitContainer;
