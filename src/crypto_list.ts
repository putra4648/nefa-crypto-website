//  Mapping crypto image
import btc from '../src/images/icons/btc.svg';
import eth from '../src/images/icons/eth.svg';
import solana from '../src/images/icons/solana.svg';
import doge from '../src/images/icons/doge.svg';

import pappay from '../src/images/icons/pappay.svg';
import btcAsia from '../src/images/icons/btc_asia.svg';
import moonRock from '../src/images/icons/mrk.svg';
import ninjaFloki from '../src/images/icons/njfk.svg';

import metacraft from '../src/images/icons/mtc.svg';
import frog from '../src/images/icons/frog.svg';
import muskDoge from '../src/images/icons/musk.svg';
import share from '../src/images/icons/2share.svg';

import chartGreen from '../src/images/icons/chart_green.svg';
import chartRed from '../src/images/icons/chart_red.svg';
type Crypto = {
  name: string;
  iconUrl: string;
  price: number;
  chartUrl: string;
};

type CryptoDetail = {
  name: string;
  columns: string[];
  cryptos: Crypto[];
};

const cryptoList: CryptoDetail[] = [
  {
    name: '🔥 Trending',
    columns: ['Name', 'Price', 'Chart'],
    cryptos: [
      {
        name: 'Bitcoin',
        iconUrl: btc,
        price: 43180.13,
        chartUrl: chartGreen,
      },
      {
        name: 'Etherum',
        iconUrl: eth,
        price: 3480.65,
        chartUrl: chartRed,
      },
      {
        name: 'Solana',
        iconUrl: solana,
        price: 150.2,
        chartUrl: chartGreen,
      },
      {
        name: 'Dogecoin',
        iconUrl: doge,
        price: 0.1572,
        chartUrl: chartGreen,
      },
    ],
  },
  {
    name: '🚀 Top Gainers',
    columns: ['Name', 'Price', 'Chart'],
    cryptos: [
      {
        name: 'PAPPAY',
        iconUrl: pappay,
        price: 0.000374,
        chartUrl: chartGreen,
      },
      {
        name: 'Bitcoin Asia',
        iconUrl: btcAsia,
        price: 0.02096,
        chartUrl: chartGreen,
      },
      {
        name: 'MoonRock',
        iconUrl: moonRock,
        price: 0.004907,
        chartUrl: chartGreen,
      },
      {
        name: 'NinjaFloki',
        iconUrl: ninjaFloki,
        price: 0.0000123,
        chartUrl: chartGreen,
      },
    ],
  },
  {
    name: '💎 Recently Added',
    columns: ['Name', 'Price', 'Chart'],
    cryptos: [
      {
        name: 'Metacraft',
        iconUrl: metacraft,
        price: 0.0608,
        chartUrl: chartRed,
      },
      {
        name: 'Bitcoin',
        iconUrl: frog,
        price: 0.5875,
        chartUrl: chartRed,
      },
      {
        name: 'Musk Doge',
        iconUrl: muskDoge,
        price: 0.04041,
        chartUrl: chartGreen,
      },
      {
        name: '2SHARE',
        iconUrl: share,
        price: 11366.24,
        chartUrl: chartGreen,
      },
    ],
  },
];

export default cryptoList;
