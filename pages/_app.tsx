import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css';
import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/kanit';
import type { AppProps } from 'next/app';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-78VX14HL8E');
          `
        }}
      />
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </>
  );
};

export default App;
