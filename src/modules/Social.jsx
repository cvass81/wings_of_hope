import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Social = () => (
  <>
    <Button color="inherit" href="mailto:info@grafasdiving.gr">
      CONTACT
    </Button>
    <IconButton
      color="inherit"
      target="_blank"
      href="https://www.facebook.com/grafasdiving/"
    >
      <FacebookIcon />
    </IconButton>
    <IconButton
      color="inherit"
      target="_blank"
      href="https://www.instagram.com/grafasdiving/"
    >
      <InstagramIcon />
    </IconButton>
  </>
);

export default Social;
