import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import buyLogo from '../images/buy_logo.svg';
import arrowRight from '../images/icons/arrow_right.svg';
import vaultLogo from '../images/vault_logo.svg';
import cryptoMiningLogo from '../images/crypto_mining_logo.svg';
import brandLogo from '../images/brand_logo.svg';
import cryptoGiftLogo from '../images/crypto_gift_logo.svg';
import logoList from '../logo_list';
import creditCardLogo from '../images/card_credit_logo.svg';
import {
  ArrowForward,
  ArrowUpward,
  CheckCircle,
  ExpandMore,
} from '@mui/icons-material';
import footerMenu from '../footer_menu';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import getStartedLogos from '../get_started_logos';
import { blue, lightBlue } from '@mui/material/colors';

export default function BuyNow(): ReactJSXElement {
  return (
    <Grid container gap={10}>
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
                Buy now and get 40% extra bonus Minimum pre-sale amount 25
                Crypto Coin. We accept BTC crypto-currency
              </Typography>

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
                    startAdornment: (
                      <InputAdornment
                        position='start'
                        variant='outlined'
                        sx={{ px: 2, py: 4, color: 'secondary.main' }}
                      >
                        <Stack
                          direction='row'
                          alignItems='center'
                          width='fit-content'
                          spacing={2}
                        >
                          <Typography sx={{ minWidth: 80 }}>Amount</Typography>
                          <Divider
                            sx={{ color: 'secondary.main', border: 1 }}
                            orientation='vertical'
                            flexItem
                          />
                        </Stack>
                      </InputAdornment>
                    ),
                  }}
                />
                <Select sx={{ minWidth: 120, borderColor: 'secondary.main' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                    startAdornment: (
                      <InputAdornment
                        position='start'
                        variant='outlined'
                        sx={{ px: 2, py: 4, color: 'secondary.main' }}
                      >
                        <Stack
                          direction='row'
                          alignItems='center'
                          width='fit-content'
                          spacing={2}
                        >
                          <Typography sx={{ minWidth: 80 }}>Get</Typography>
                          <Divider
                            sx={{ color: 'secondary.main', border: 1 }}
                            orientation='vertical'
                            flexItem
                          />
                        </Stack>
                      </InputAdornment>
                    ),
                  }}
                />
                <Select sx={{ minWidth: 120, borderColor: 'secondary.main' }}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
            <img src={buyLogo}></img>
          </Grid>
        </Grid>
      </Container>

      {/* Partners */}
      <Container>
        <Grid
          container
          item
          lg={12}
          alignItems='center'
          justifyContent='center'
        >
          <Grid item lg={12}>
            <Typography variant='h5' paragraph textAlign='center'>
              Trusted Partners Worldwide
            </Typography>
            <Typography
              variant='subtitle1'
              textAlign='center'
              color={(theme) => theme.palette.grey[500]}
            >
              We&apos;re partners with countless major organisations around the
              globe
            </Typography>
          </Grid>
          {logoList.map((logo) => (
            <Grid item lg={2} key={logo}>
              <img src={logo} width='100%' />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Credit Card */}
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
                Subject to cardholder and rewards terms which will be available
                at application.
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

      {/* Crypto Mining */}

      <Grid
        container
        item
        lg={12}
        alignItems='center'
        p={15}
        gap={10}
        sx={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.7) -9.25%, rgba(244, 249, 255, 0.1) -9.25%, rgba(244, 249, 255, 0.7) 108.74%)',
        }}
      >
        <Grid item lg>
          <Stack direction='column' spacing={2}>
            <Typography variant='h4'>
              Advanced Trading{' '}
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

      {/* Vault Logo */}
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

      {/* Get Started */}
      <Container>
        <Grid
          container
          item
          lg={12}
          alignItems='center'
          justifyContent='space-around'
          gap={10}
        >
          <Grid item lg={12}>
            <Typography variant='h4' textAlign='center'>
              Get started in just a few minutes
            </Typography>
          </Grid>

          {getStartedLogos.map((logo) => (
            <Grid item lg={3} key={logo.name}>
              <img src={logo.logoUrl} width='100%' height='300px' />
              <Typography variant='h6' textAlign='center' paragraph>
                {logo.name}
              </Typography>
              <Typography textAlign='center' paragraph>
                {logo.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CRYPTO GIFT  */}
      <Container>
        <Grid container item lg={12} alignItems='center' gap={10}>
          <Grid item lg={6}>
            <img src={cryptoGiftLogo} width='100%' height='100%' />
          </Grid>
          <Grid item lg>
            <Stack direction='column' spacing={2}>
              <Typography
                color={(theme) => theme.palette.secondary.main}
                paragraph
              >
                SUPPORT
              </Typography>
              <Typography variant='h4' paragraph>
                Frequently asked questions
              </Typography>
              <Typography variant='subtitle1' paragraph>
                Why should I choose NEFA?
              </Typography>
              <Typography
                variant='subtitle2'
                color={(theme) => theme.palette.grey[500]}
              >
                We&apos;re industry pioneers, having been in the cryptocurrency
                industry since 2016. We&apos;ve facilitated more than 21 billion
                USD worth of transactions on our exchange for customers in over
                40 countries. Today, we&apos;re trusted by over 8 million
                customers around the world and have received praise for our
                easy-to-use app, secure wallet, and range of features.
              </Typography>
              <Box>
                <Divider />
                <Accordion
                  disableGutters
                  elevation={0}
                  TransitionProps={{ unmountOnExit: true }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>How secure is NEFA?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  elevation={0}
                  TransitionProps={{ unmountOnExit: true }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Do I have to buy a whole Bitcoin?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  elevation={0}
                  TransitionProps={{ unmountOnExit: true }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>How do I actually buy Bitcoin?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Back to top */}
      <Container>
        <Grid container item lg={12} justifyContent='center'>
          <Grid item>
            <Button
              variant='outlined'
              endIcon={<ArrowUpward />}
              color='inherit'
            >
              Back to Top
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Container>
        <Grid container item>
          <Grid item lg={3}>
            <img src={brandLogo} />
          </Grid>
          {footerMenu.map((menu, menuIndex) => (
            <Grid key={menuIndex} item lg={2}>
              <List disablePadding>
                {menu.map((innerMenu) => (
                  <ListItemButton key={innerMenu}>{innerMenu}</ListItemButton>
                ))}
              </List>
            </Grid>
          ))}
          <Grid item lg>
            <List disablePadding>
              <ListItemText primary='Newsletter' />
              <ListItemText primary="Never miss anything crypto when you're on the go" />
              <Stack direction='row' spacing={2}>
                <TextField fullWidth placeholder='Enter your email' />
                <Button color='secondary' variant='contained'>
                  <ArrowForward />
                </Button>
              </Stack>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
