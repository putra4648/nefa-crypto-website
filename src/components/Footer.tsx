import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ArrowForward } from '@mui/icons-material';
import {
  Box,
  Grid,
  List,
  Button,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material';
import footerMenu from '../footer_menu';
import brandLogo from '../images/brand_logo.svg';

export default function Footer(): ReactJSXElement {
  return (
    <Grid container item justifyContent='center' p={5}>
      <Grid item lg={2}>
        <Box
          sx={{
            borderTop: 1,
            borderBottom: 1,
            borderColor: (theme) => theme.palette.grey[300],
            height: 1,
            p: 3,
          }}
        >
          <img src={brandLogo} />
        </Box>
      </Grid>
      {footerMenu.map((menu, menuIndex) => (
        <Grid
          key={menuIndex}
          item
          lg={2}
          sx={{
            borderRight: 1,
            borderTop: 1,
            borderBottom: 1,
            borderColor: (theme) => theme.palette.grey[300],
          }}
        >
          <List disablePadding sx={{ p: 3 }}>
            {menu.map((innerMenu) => (
              <Button
                sx={{ textTransform: 'capitalize' }}
                fullWidth
                color='inherit'
                key={innerMenu}
              >
                {innerMenu}
              </Button>
            ))}
          </List>
        </Grid>
      ))}
      <Grid
        item
        lg
        px={3}
        sx={{
          borderTop: 1,
          borderBottom: 1,
          borderColor: (theme) => theme.palette.grey[300],
        }}
      >
        <List disablePadding sx={{ p: 3 }}>
          <ListItemText
            primary='Newsletter'
            primaryTypographyProps={{
              variant: 'overline',
            }}
          />
          <ListItemText secondary="Never miss anything crypto when you're on the go" />
          <Stack direction='row' spacing={2}>
            <TextField
              sx={{ borderRadius: '22px' }}
              fullWidth
              placeholder='Enter your email'
              InputProps={{
                sx: {
                  borderRadius: '10px',
                },
              }}
            />
            <Button
              color='secondary'
              variant='contained'
              sx={{ borderRadius: '10px' }}
            >
              <ArrowForward />
            </Button>
          </Stack>
        </List>
      </Grid>
    </Grid>
  );
}
