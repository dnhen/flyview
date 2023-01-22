import { FlightTable } from '@/components/edit/FlightTable';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { useAuth } from '@/contexts/AuthContext';
import { withAuth } from '@/hoc/withAuth';
import { useAirline } from '@/hooks/useAirline';
import { Card, CardBody, CardHeader, Divider, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
  const { currentUser } = useAuth();
  const airlineCode = currentUser!.uid; // Use the user's UID for airline code; TODO: update this to not be UID
  const { airlineData, updateAirline } = useAirline(airlineCode);

  if (!airlineData) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Home | flyview</title>
        <meta name="description" content="Home | flyview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <StandardPage>
        <Heading>Home</Heading>
        <Divider />
        <Flex gap="6" wrap={{ base: 'wrap', lg: 'nowrap' }}>
          <Flex flexDir="column" w={{ base: '100%', lg: '50%' }}>
            <Card>
              <CardHeader>
                <Text fontSize="2xl">Airline Configuration</Text>
              </CardHeader>
              <CardBody>
                <FormControl mb="4">
                  <FormLabel>Airline Code</FormLabel>
                  <Text>{airlineCode}</Text>
                </FormControl>
                <Divider />
                <FormControl mb="4">
                  <FormLabel>Airline Name</FormLabel>
                  <Input defaultValue={airlineData?.name} placeholder="Name" onChange={(e) => updateAirline({ name: e.target.value })} />
                </FormControl>
                <FormControl mb="4">
                  <FormLabel>Airline Logo</FormLabel>
                  <Input defaultValue={airlineData?.logo} placeholder="http://logo.com" onChange={(e) => updateAirline({ logo: e.target.value })} />
                </FormControl>
                <FormControl mb="4">
                  <FormLabel>Header Color</FormLabel>
                  <input type="color" defaultValue={airlineData?.headerColor} onChange={(e) => updateAirline({ headerColor: e.target.value })} />
                </FormControl>
                <FormControl mb="4">
                  <FormLabel>Text Color</FormLabel>
                  <input type="color" defaultValue={airlineData?.textColor} onChange={(e) => updateAirline({ textColor: e.target.value })} />
                </FormControl>
              </CardBody>
            </Card>
          </Flex>
          <Flex flexDir="column" w={{ base: '100%', lg: '50%' }}>
            <Card>
              <CardHeader>
                <Text fontSize="2xl">Today&apos;s Flights</Text>
              </CardHeader>
              <CardBody overflowX="auto">
                <FlightTable />
              </CardBody>
            </Card>
          </Flex>
        </Flex>
      </StandardPage>
    </>
  );
};

export default withAuth(Home);
