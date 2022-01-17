import {
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import buyLogo from '../images/buy_logo.svg';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useState } from 'react';
import { currencies, getAmounts } from '../currencies';

export default function Exchange(): ReactJSXElement {
  const [buy, setBuy] = useState({
    amount: '',
    get: '',
  });

  return (
    <Container>
      <Grid container item alignItems='center' gap={10}>
        <Grid item lg>
          <Stack direction='column' spacing={2}>
            <Typography variant='h4'>
              Buy & trade on the original crypto exchange.
            </Typography>
            <Typography
              variant='subtitle1'
              color={(theme) => theme.palette.grey[500]}
            >
              Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto
              Coin. We accept BTC crypto-currency
            </Typography>

            <Stack direction='row' spacing={2}>
              <TextField
                focused
                fullWidth
                color='secondary'
                inputProps={{
                  style: {
                    textAlign: 'right',
                  },
                }}
                InputProps={{
                  sx: {
                    borderRadius: '22px',
                  },
                  startAdornment: (
                    <Stack
                      direction='row'
                      alignItems='center'
                      width='fit-content'
                      spacing={2}
                      sx={{ p: 3, color: 'secondary.main' }}
                    >
                      <Typography sx={{ minWidth: 80 }}>Amount</Typography>
                      <Divider
                        sx={{ color: 'secondary.main', border: 1 }}
                        orientation='vertical'
                        flexItem
                      />
                    </Stack>
                  ),
                }}
              />
              {/* Amount Select */}
              <Select
                defaultValue={currencies[0].name}
                onChange={(e) =>
                  setBuy((prevState) => ({
                    ...prevState,
                    amount: e.target.value,
                  }))
                }
                color='secondary'
                displayEmpty
                sx={{
                  minWidth: 120,
                  borderRadius: 5,
                }}
              >
                {currencies.map((curr, currIndex) => (
                  <MenuItem key={currIndex} value={curr.name}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                      <img src={curr.iconUrl} width='30px' height='100%' />
                      <Typography>{curr.name}</Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </Stack>

            <Stack direction='row' spacing={2}>
              <TextField
                fullWidth
                focused
                color='secondary'
                inputProps={{
                  style: {
                    textAlign: 'right',
                  },
                }}
                InputProps={{
                  sx: {
                    borderRadius: 5,
                  },
                  startAdornment: (
                    <Stack
                      direction='row'
                      alignItems='center'
                      width='fit-content'
                      spacing={2}
                      sx={{ p: 3, color: 'secondary.main' }}
                    >
                      <Typography sx={{ minWidth: 80 }}>Get</Typography>
                      <Divider
                        sx={{ color: 'secondary.main', border: 1 }}
                        orientation='vertical'
                        flexItem
                      />
                    </Stack>
                  ),
                }}
              />
              {/* Get Amounts Select */}
              <Select
                defaultValue={getAmounts[0].name}
                onChange={(e) =>
                  setBuy((prevState) => ({
                    ...prevState,
                    get: e.target.value,
                  }))
                }
                color='secondary'
                displayEmpty
                sx={{ minWidth: 120, borderRadius: 5 }}
              >
                {getAmounts.map((amount, amountIndex) => (
                  <MenuItem key={amountIndex} value={amount.name}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                      <img src={amount.iconUrl} width='30px' height='100%' />
                      <Typography>{amount.name}</Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </Stack>

            <Button
              variant='contained'
              color='secondary'
              sx={{ borderRadius: 10, p: 2 }}
            >
              Buy Now
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={6}>
          <img src={buyLogo} width='100%' height='100%'></img>
        </Grid>
      </Grid>
    </Container>
  );
}
