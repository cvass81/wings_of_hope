import React from 'react';
import * as C from './constants';
import Section from './items/section';
import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {Object.entries(C).map(([key, props]) => (
        <Section key={key} {...props} />
      ))}
    </div>
  );
};

export default Main;
