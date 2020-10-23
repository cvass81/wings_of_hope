import React from 'react';
import YouTube from 'react-youtube';
import { withResizeDetector } from 'react-resize-detector';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

const Trailer = ({ width: outerWidthProps, height: outerHeightProps }) => {
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

  const opts = {
    width,
    height,
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return (
    <>
      <div className={classes.measure} />
      {width && height && (
        <CardMedia
          className={classes.video}
          opts={opts}
          videoId="5b4bqCgMUkg"
          frameBorder="0"
          component={YouTube}
          title="Trailer"
          allowFullScreen
        />
      )}
    </>
  );
};

export default withResizeDetector(Trailer);
