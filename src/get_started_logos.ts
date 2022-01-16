import signUpLogoSvg from '../src/images/sign_up_logo.svg';
import fundLogoSvg from '../src/images/fund_logo.svg';
import buyLogoSvg from '../src/images/buy_logo.svg';

interface Logo {
  name: string;
  logoUrl: string;
  description: string;
}

const getStartedLogos: Logo[] = [
  {
    name: 'Sign Up',
    logoUrl: signUpLogoSvg,
    description:
      'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to friends',
  },
  {
    name: 'Fund',
    logoUrl: fundLogoSvg,
    description:
      'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
  },
  {
    name: 'Buy Crypto',
    logoUrl: buyLogoSvg,
    description:
      'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
  },
];

export default getStartedLogos;
