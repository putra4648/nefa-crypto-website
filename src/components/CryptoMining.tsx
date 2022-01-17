import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {
  Button,
  Container,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';
import cryptoMiningLogo from '../images/crypto_mining_logo.svg';

export default function CryptoMining(): ReactJSXElement {
  return (
    <Container
      sx={{
        borderRadius: '40px',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.7) -9.25%, rgba(244, 249, 255, 0.1) -9.25%, rgba(244, 249, 255, 0.7) 108.74%)',
      }}
    >
      <Grid container item lg={12} alignItems='center' gap={10} p={15}>
        <Grid item lg>
          <Stack direction='column' spacing={2}>
            <Typography variant='h4'>
              Advanced Trading {''}
              <Typography
                variant='h4'
                sx={{
                  display: 'inline',
                  background: `linear-gradient(${lightBlue[200]}, ${blue[600]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Tools
              </Typography>
            </Typography>

            <List>
              <Stack direction='column' spacing={2}>
                <ListItemText primary='Professional Access, Non-stop Availability' />
                <ListItemText secondary='We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.' />
                <ListItemText primary='A Range of Powerful Apis' />
                <ListItemText secondary='Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.' />
                <ListItemText primary='Customer Support' />
                <ListItemText secondary='Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.' />
              </Stack>
            </List>
            <Stack direction='row' spacing={2}>
              <Button
                color='secondary'
                variant='outlined'
                sx={{ borderRadius: 10, py: 2, px: 5 }}
              >
                Get Started
              </Button>
              <Button
                sx={{
                  borderRadius: 10,
                  py: 2,
                  px: 5,
                  textDecoration: 'underline',
                }}
                color='secondary'
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={6}>
          <img src={cryptoMiningLogo} width='100%' />
        </Grid>
      </Grid>
    </Container>
  );
}
