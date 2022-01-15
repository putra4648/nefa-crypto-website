import { AppBar, Toolbar, Button, Stack, Container } from '@mui/material';
import brandLogoSvg from '../images/brand_logo.svg';

export default function CustomAppbar() {
  const listMenu = [
    'Cryptocurrency',
    'Exchanges',
    'Watchlist',
    'NFT',
    'Portofolio',
    'Products',
  ];

  return (
    <AppBar color='transparent' elevation={0} position='static'>
      <Container disableGutters>
        <Toolbar>
          <img src={brandLogoSvg}></img>
          <Stack direction='row' spacing={2} ml={5} flexGrow={1}>
            {listMenu.map((menu, index) => (
              <Button
                key={index}
                color='inherit'
                sx={{ textTransform: 'capitalize' }}
              >
                {menu}
              </Button>
            ))}
          </Stack>
          <Stack direction='row' spacing={2}>
            <Button
              variant='outlined'
              color='secondary'
              sx={{ borderRadius: 5 }}
            >
              Login
            </Button>
            <Button
              variant='contained'
              color='secondary'
              sx={{ borderRadius: 5 }}
            >
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
