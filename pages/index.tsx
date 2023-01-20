import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { withAuth } from '@/hoc/withAuth';
import { useFlights } from '@/hooks/useFlights';
import { Button, Text } from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
  const { flights, addFlight } = useFlights();

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
        <Button onClick={() => addFlight('QF 498', 'Sydney', '21:00', '20:45', 1)}>Add flight test</Button>
      </StandardPage>
    </>
  );
};

export default withAuth(Home);
