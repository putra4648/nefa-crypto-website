import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Container, Grid, Typography } from '@mui/material';
import logoList from '../logo_list';

export default function Partners(): ReactJSXElement {
  return (
    <Container
      sx={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.7) -9.25%, rgba(255, 255, 255, 0.6) -9.25%, rgba(244, 249, 255, 0.7) 108.74%)',
        borderRadius: '40px',
      }}
    >
      <Grid container item lg={12} alignItems='center' justifyContent='center'>
        <Grid item lg={12}>
          <Typography variant='h5' paragraph textAlign='center'>
            Trusted Partners Worldwide
          </Typography>
          <Typography
            variant='subtitle1'
            textAlign='center'
            color={(theme) => theme.palette.grey[500]}
          >
            We&apos;re partners with countless major organisations around the
            globe
          </Typography>
        </Grid>
        {logoList.map((logo) => (
          <Grid item lg={2} key={logo}>
            <img src={logo} width='100%' />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
