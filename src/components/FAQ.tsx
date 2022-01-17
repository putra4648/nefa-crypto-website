import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ExpandMore } from '@mui/icons-material';
import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import cryptoGiftLogo from '../images/crypto_gift_logo.svg';

export default function FAQ(): ReactJSXElement {
  return (
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
              USD worth of transactions on our exchange for customers in over 40
              countries. Today, we&apos;re trusted by over 8 million customers
              around the world and have received praise for our easy-to-use app,
              secure wallet, and range of features.
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
  );
}
