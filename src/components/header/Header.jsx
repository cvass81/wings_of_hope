import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Social from '../../modules';
import { Logo } from '../../assets/svgs';

const Header = () => (
  <AppBar position="static">
    <Container>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h3">
            <Logo />
          </Typography>
        </Grid>
        <Grid item>
          <Social />
        </Grid>
      </Grid>
    </Container>
  </AppBar>
);

export default Header;
