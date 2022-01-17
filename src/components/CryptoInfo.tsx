import { KeyboardArrowRight } from '@mui/icons-material';
import {
  Button,
  Card,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import cryptoList from '../crypto_list';

export default function CryptoInfo() {
  return (
    <Card sx={{ borderRadius: '40px', m: 8, p: 3 }}>
      <Grid container spacing={5}>
        {cryptoList.map((crypto) => {
          return (
            <Grid item key={crypto.name} lg={4}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography>{crypto.name}</Typography>
                <Button
                  size='small'
                  color='secondary'
                  endIcon={<KeyboardArrowRight />}
                >
                  More
                </Button>
              </Stack>

              <TableContainer>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      {crypto.columns.map((crypto) => (
                        <TableCell key={crypto}>{crypto}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {crypto.cryptos.map((data, dataIndex) => (
                      <TableRow key={dataIndex}>
                        <TableCell>
                          <Stack direction='row' alignItems='center'>
                            <img
                              src={data.iconUrl}
                              height='25px'
                              style={{ marginRight: '10px' }}
                            ></img>
                            {data.name}
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack direction='row' alignItems='center'>
                            <Typography
                              fontWeight={700}
                              sx={{
                                mr: 0.5,
                                display: 'inline',
                                color: data.chartUrl.match('green')
                                  ? 'green'
                                  : 'red',
                              }}
                            >
                              {data.chartUrl.match('green') ? '+' : '-'} {''}
                            </Typography>
                            $
                            {data.price.toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 6,
                            })}
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <img src={data.chartUrl} height='25px'></img>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
}
