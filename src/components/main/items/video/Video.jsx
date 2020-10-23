import React from 'react';
import withWidth from '@material-ui/core/withWidth';

const Video = props => {
  let width;
  switch (props.width) {
    case 'md': {
      width = '420';
      break;
    }
    case 'sm': {
      width = '380';
      break;
    }
    case 'xs': {
      width = '320';
      break;
    }
    default: {
      width = '480';
      break;
    }
  }
  const height = 0.5625 * width;

  return (
    <iframe
      title="Video"
      width={width}
      height={height}
      src="https://www.youtube.com/embed/iP5BgRFjqKM?autoplay=1&amp;modestbranding=1&amp;rel=0"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default withWidth()(Video);
