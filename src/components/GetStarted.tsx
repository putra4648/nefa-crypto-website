import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Container, Grid, Typography } from '@mui/material';

import getStartedLogos from '../get_started_logos';

export default function GetStarted(): ReactJSXElement {
  return (
    <Container
      sx={{
        p: 5,
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.7) -9.25%, rgba(255, 255, 255, 0.6) -9.25%, rgba(244, 249, 255, 0.7) 108.74%)',
        borderRadius: '40px',
      }}
    >
      <Grid
        container
        item
        lg={12}
        alignItems='center'
        justifyContent='space-around'
        gap={10}
      >
        <Grid item lg={12}>
          <Typography variant='h4' textAlign='center'>
            Get started in just a few minutes
          </Typography>
        </Grid>

        {getStartedLogos.map((logo) => (
          <Grid item lg={3} key={logo.name}>
            <img src={logo.logoUrl} width='100%' height='300px' />
            <Typography variant='h6' textAlign='center' paragraph>
              {logo.name}
            </Typography>
            <Typography textAlign='center' paragraph>
              {logo.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
