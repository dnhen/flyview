import { LogoIcon } from '@/components/LogoIcon';
import { StandardPage } from '@/components/StandardPage';
import { ViewerBody } from '@/components/viewer/ViewerBody';
import { ViewerHeader } from '@/components/viewer/ViewerHeader';
import { useAirline } from '@/hooks/useAirline';
import { useFlights } from '@/hooks/useFlights';
import { Button, Divider, FormControl, FormLabel, Heading, Icon, Input } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const MINUTES_AFTER_DEP_TO_DISPLAY = 60;

const Viewer = () => {
  const router = useRouter();
  const { ac } = router.query;
  const [inputAirlineCode, setInputAirlineCode] = useState<string>();
  const { flights } = useFlights(ac as string);
  const { airlineData } = useAirline(ac as string);

  return (
    <>
      <Head>
        <title>Viewer | flyview</title>
        <meta name="description" content="Viewer | flyview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!ac ? (
        <StandardPage>
          <Icon as={LogoIcon} color="jet.500" boxSize="10" mb="4" onClick={() => router.push('/')} cursor="pointer" />
          <Heading>Viewer</Heading>
          <Divider />
          <FormControl>
            <FormLabel>Airline Code</FormLabel>
            <Input isRequired={true} placeholder="ABC123DEF456" onChange={(e) => setInputAirlineCode(e.target.value)} />
          </FormControl>
          <Button mt="4" colorScheme="jet" onClick={() => router.push('/viewer?ac=' + inputAirlineCode)}>
            View
          </Button>
        </StandardPage>
      ) : (
        <>
          <ViewerHeader airlineName={airlineData?.name || 'Unnamed'} logo={airlineData?.logo || 'https://via.placeholder.com/728x143'} headerColor={airlineData?.headerColor || '#2A272A'} textColor={airlineData?.textColor || '#FFFFFF'} />
          <ViewerBody flights={flights} />
        </>
      )}
    </>
  );
};

export default Viewer;

export const viewerWidths = {
  flight: 15,
  destination: 28,
  sched: 10,
  board: 10,
  gate: 8,
  remark: 29
};
