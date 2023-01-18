import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/kanit';
import type { AppProps } from 'next/app';
import { theme } from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
