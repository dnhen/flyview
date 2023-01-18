import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css';
import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/kanit';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
