import { Box } from '@mui/material';
import BuyNow from '../components/BuyNow';
import CryptoInfo from '../components/CryptoInfo';

import MainHeader from '../components/MainHeader';

export default function HomePage() {
  return (
    <Box>
      <MainHeader />
      <CryptoInfo />
      <BuyNow />
    </Box>
  );
}
