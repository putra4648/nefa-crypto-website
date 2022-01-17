import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { CheckCircle } from '@mui/icons-material';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import vaultLogo from '../images/vault_logo.svg';

export default function CryptoVault(): ReactJSXElement {
  return (
    <Container>
      <Grid container item lg={12} alignItems='center' gap={10}>
        <Grid item lg={6}>
          <img src={vaultLogo} width='100%' />
        </Grid>
        <Grid item lg>
          <Typography variant='h4'>
            Industry-leading security from day one
          </Typography>

          <List>
            <Stack direction='column' spacing={2}>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircle color='secondary' />
                </ListItemIcon>
                <ListItemText primary='Safety, security and compliance' />
              </ListItem>
              <ListItemText secondary='NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.' />
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircle color='secondary' />
                </ListItemIcon>
                <ListItemText primary='Hardware Security Keys' />
              </ListItem>
              <ListItemText secondary='With NEFA you can secure your account with a hardware security key via WebAuthn.' />
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckCircle color='secondary' />
                </ListItemIcon>
                <ListItemText primary='SOC Certifications' />
              </ListItem>
              <ListItemText secondary='NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.' />
            </Stack>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
