import { Box, Button, Typography, Stack } from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';
import btcLogo from '../images/btc_logo.svg';
import CustomAppbar from './CustomAppbar';

export default function MainHeader() {
  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
      }}
    >
      <CustomAppbar />
      <img src={btcLogo} alt='BTC LOGO' width='100%' height='100%' style={{}} />
      <Stack
        gap={2}
        p={7}
        sx={{ position: 'absolute', width: 2 / 4, top: '15%', left: '5%' }}
      >
        <Typography color='secondary.main'>SIGN UP TODAY</Typography>
        <Typography variant='h2' sx={{ fontWeight: 700 }}>
          The World’s{' '}
          <Typography
            variant='h2'
            sx={{
              fontWeight: 700,
              background: `linear-gradient(${lightBlue[200]}, ${blue[600]})`,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
          >
            Fastest Growing
          </Typography>{' '}
          Crypto Web App
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{ color: (theme) => theme.palette.text.disabled }}
        >
          Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank
          transfers or your credit/debit card.
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button variant='contained' color='secondary'>
            Get Started
          </Button>
          <Button variant='outlined' color='secondary'>
            Download App
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
