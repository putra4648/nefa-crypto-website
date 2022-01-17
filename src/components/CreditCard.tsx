import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { CheckCircle } from '@mui/icons-material';
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import creditCardLogo from '../images/card_credit_logo.svg';

export default function CreditCard(): ReactJSXElement {
  return (
    <Container>
      <Grid container item lg={12} alignItems='center' gap={10}>
        <Grid item lg={6}>
          <img src={creditCardLogo} width='100%' />
        </Grid>
        <Grid item lg>
          <Stack direction='column' spacing={2} alignItems='flex-start'>
            <Typography variant='h4'>
              Introducing the NEFA Credit Card
            </Typography>
            <Typography
              variant='subtitle1'
              color={(theme) => theme.palette.grey[500]}
            >
              Subject to cardholder and rewards terms which will be available at
              application.
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircle color='secondary' />
                </ListItemIcon>
                <ListItemText primary='Up to 3% back on purchases' />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircle color='secondary' />
                </ListItemIcon>
                <ListItemText primary='Earn rewards in bitcoin or any crypto on NEFA' />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircle color='secondary' />
                </ListItemIcon>
                <ListItemText primary='No annual fee' />
              </ListItem>
            </List>
            <Button
              variant='outlined'
              color='secondary'
              sx={{ borderRadius: 10, p: 2 }}
            >
              Join the waitlist
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
