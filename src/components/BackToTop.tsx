import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ArrowUpward } from '@mui/icons-material';
import { Button, Container, Grid } from '@mui/material';

export default function BackToTop(): ReactJSXElement {
  return (
    <Container>
      <Grid container item lg={12} justifyContent='center'>
        <Grid item>
          <Button variant='outlined' endIcon={<ArrowUpward />} color='inherit'>
            Back to Top
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
