// Component that shows when no cards are loaded.

import React from 'react';
import defaultBackground from '../../assets/defaultBackground.svg';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

// Styled components, scales background image on smaller screen.
const Image = styled.img`
  height: 350px;
  @media (max-width: 688px) {
    height: 250px;
  }
`;

// Component. TODO: find better way to center background image, instead of minHeight.
const EmptyDefault = () => {
  // JSX
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '70vh' }}
    >
      <Typography>Start to add books to your library.</Typography>
      <Image src={defaultBackground} alt="Default background." />
    </Grid>
  );
};

export default EmptyDefault;
