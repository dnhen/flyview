import { AddFlight } from '@/components/add/AddFlight';
import { ContentCard } from '@/components/ContentCard';
import { FlightTable } from '@/components/edit/FlightTable';
import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { withAuth } from '@/hoc/withAuth';
import { Divider, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';

const Add = () => {
  return (
    <>
      <Head>
        <title>Add Flight // Flight Information Display</title>
        <meta name="description" content="Add Flight // Flight Information Display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <StandardPage>
        <Heading>Add Flight</Heading>
        <Divider />
        <Flex gap="6" wrap={{ base: 'wrap', lg: 'nowrap' }}>
          <Flex w={{ base: '100%', lg: '50%' }}>
            <ContentCard>
              <AddFlight />
            </ContentCard>
          </Flex>
          <Flex w={{ base: '100%', lg: '50%' }}>
            <ContentCard>
              <FlightTable />
            </ContentCard>
          </Flex>
        </Flex>
      </StandardPage>
    </>
  );
};

export default withAuth(Add);
