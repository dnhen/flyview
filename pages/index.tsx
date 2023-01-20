import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { withAuth } from '@/hoc/withAuth';
import { useFlights } from '@/hooks/useFlights';
import { Text } from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
  const { flights } = useFlights();

  console.log(flights);

  return (
    <>
      <Head>
        <title>Flight Information Display</title>
        <meta name="description" content="Flight Information Display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <StandardPage>
        <Text>
          Standard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home pageStandard home
          page
        </Text>
      </StandardPage>
    </>
  );
};

export default withAuth(Home);
