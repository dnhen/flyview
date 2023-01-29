import { AddFlight } from '@/components/add/AddFlight';
import { FlightTable } from '@/components/edit/FlightTable';
import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { withAuth } from '@/hoc/withAuth';
import { Card, CardBody, CardHeader, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

const Add = () => {
  return (
    <>
      <Head>
        <title>Add Flight | flyview</title>
        <meta name="description" content="Add Flight | flyview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <StandardPage>
        <Heading>Add Flight</Heading>
        <Divider />
        <Flex gap="6" wrap={{ base: 'wrap', lg: 'nowrap' }}>
          <Flex flexDir="column" w={{ base: '100%', lg: '50%' }}>
            <Card>
              <CardBody>
                <AddFlight />
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

export default withAuth(Add);
