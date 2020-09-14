import React from 'react';
import Container from '@material-ui/core/Container';

const Section = ({ Component, ...props }) => (
  <div style={{ ...props }}>
    <Container>
      <Component />
    </Container>
  </div>
);

export default Section;
