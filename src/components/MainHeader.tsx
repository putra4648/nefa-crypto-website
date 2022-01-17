import {
  Box,
  Button,
  Typography,
  Stack,
  Select,
  MenuItem,
} from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';
import btcLogo from '../images/btc_logo.svg';
import CustomAppbar from './CustomAppbar';

export default function MainHeader() {
  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.7) -9.25%, rgba(244, 249, 255, 0.1) -9.25%, rgba(244, 249, 255, 0.7) 108.74%)',
      }}
    >
      <CustomAppbar />
      <img src={btcLogo} alt='BTC LOGO' width='100%' height='100%' />
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
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
          <Button
            variant='contained'
            color='secondary'
            sx={{ py: 2, px: 3, borderRadius: 10 }}
          >
            Get Started
          </Button>
          <Select
            variant='outlined'
            color='secondary'
            displayEmpty
            sx={{ px: 3, borderRadius: 10, color: 'secondary.main' }}
          >
            <MenuItem disabled>
              <Typography>Download App</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Android</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Windows</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Lord Anton Wibowo</Typography>
            </MenuItem>
          </Select>
        </Stack>
      </Stack>
    </Box>
  );
}
