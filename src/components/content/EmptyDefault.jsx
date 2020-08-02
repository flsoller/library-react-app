import React from 'react';
import defaultBackground from '../../assets/defaultBackground.svg';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Image = styled.img`
  height: 350px;
  @media (max-width: 688px) {
    height: 250px;
  }
`;

const EmptyDefault = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '75vh' }}
    >
      <Typography>Select your category from above.</Typography>
      <Image src={defaultBackground} alt="Default background." />
    </Grid>
  );
};

export default EmptyDefault;
