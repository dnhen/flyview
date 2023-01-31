import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css';
import { theme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/kanit';
import { usePostHog } from 'next-use-posthog';
import type { AppProps } from 'next/app';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => {
  // PostHog
  usePostHog('phc_LuTJIAfmwSM7izS6tqF854glPXbhpRXAdZkwjxxe46C', {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing();
    }
  });

  return (
    <AuthProvider>
      {/* Google tag (gtag.js) */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-QP4F79ZETM`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-QP4F79ZETM');
          `
        }}
      />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
