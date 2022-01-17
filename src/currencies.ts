import usFlag from '../src/images/icons/us_curr.svg';
import idFlag from '../src/images/icons/idr_curr.svg';

import btcIcons from '../src/images/icons/btc.svg';
import ethIcons from '../src/images/icons/eth.svg';

type Currency = {
  name: string;
  iconUrl: string;
  price: number;
};

const currencies: Currency[] = [
  {
    name: 'USD',
    iconUrl: usFlag,
    price: 14000,
  },
  {
    name: 'IDR',
    iconUrl: idFlag,
    price: 1,
  },
];

const getAmounts: Currency[] = [
  {
    name: 'BTC',
    iconUrl: btcIcons,
    price: 6300,
  },
  {
    name: 'ETH',
    iconUrl: ethIcons,
    price: 3000,
  },
];

export { currencies, getAmounts };
