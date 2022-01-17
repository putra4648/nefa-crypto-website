import { Grid } from '@mui/material';
import Exchange from '../components/Exchange';
import CryptoInfo from '../components/CryptoInfo';

import MainHeader from '../components/MainHeader';
import Partners from '../components/Partners';
import CreditCard from '../components/CreditCard';
import CryptoMining from '../components/CryptoMining';
import CryptoVault from '../components/CryptoVault';
import GetStarted from '../components/GetStarted';
import FAQ from '../components/FAQ';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import { Box } from '@mui/system';

export default function HomePage() {
  return (
    <Box>
      <MainHeader />
      <Grid container gap={10} alignItems='center' justifyContent='center'>
        <CryptoInfo />
        <Exchange />
        {/* Partners */}
        <Partners />

        {/* Credit Card */}
        <CreditCard />

        {/* Crypto Mining */}
        <CryptoMining />

        {/* Vault Logo */}
        <CryptoVault />

        {/* Get Started */}
        <GetStarted />

        {/* FAQ  */}
        <FAQ />

        {/* Back to top */}
        <BackToTop />

        {/* Footer */}
        <Footer />
      </Grid>
    </Box>
  );
}
