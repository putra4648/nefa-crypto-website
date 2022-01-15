import {
  Container,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import buyLogo from '../images/buy_logo.svg';

export default function BuyNow() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={6} spacing={2}>
          <Typography>Buy & trade on the original crypto exchange.</Typography>
          <Typography>
            Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto
            Coin. We accept BTC crypto-currency
          </Typography>

          <TextField
            color='secondary'
            inputProps={{
              style: {
                textAlign: 'right',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' variant='outlined'>
                  <Stack
                    direction='row'
                    alignItems='center'
                    width='fit-content'
                    spacing={2}
                  >
                    <Typography>Amount</Typography>
                    <Divider orientation='vertical' flexItem />
                  </Stack>
                </InputAdornment>
              ),
            }}
          />
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={6}>
          <img src={buyLogo}></img>
        </Grid>
      </Grid>
    </Container>
  );
}
