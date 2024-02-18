
import createPWAConfig from 'next-pwa';

const withPWA = createPWAConfig({
  dest: 'public',
  cacheOnFrontEndNav: true,
 
  reloadOnOnline: true,

  // disable: process.env.NODE_ENV === 'development',

  // ... other options you like
});

const config = {
  
};

export default process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? withPWA(config) : withPWA(config);
