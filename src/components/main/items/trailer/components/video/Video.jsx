import React from 'react';
import { withResizeDetector } from 'react-resize-detector';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

const Video = ({ width: outerWidthProps, height: outerHeightProps }) => {
  const classes = useStyles();
  const maxWidth = 600;
  const maxHeight = 0.5625 * 600;
  const outerWidth = outerWidthProps > maxWidth ? maxWidth : outerWidthProps;
  const outerHeight =
    outerHeightProps > maxHeight ? maxHeight : outerHeightProps;
  let height = 0.5625 * outerWidth;
  let width = outerWidth;
  if (height > outerHeight) {
    height = outerHeight;
    width = outerHeight / 0.5625;
  }

  return (
    <>
      <div className={classes.measure} />
      <CardMedia
        style={{
          width,
          height,
          padding: 12,
        }}
        frameBorder="0"
        component="iframe"
        title="Trailer"
        src="https://www.youtube.com/embed/5b4bqCgMUkg?autoplay=1&amp;modestbranding=1&amp;rel=0"
      />
    </>
  );
};

export default withResizeDetector(Video);
