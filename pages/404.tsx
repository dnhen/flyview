import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { withAuth } from '@/hoc/withAuth';
import { Divider, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>404 // Flight Information Display</title>
        <meta name="description" content="404 // Flight Information Display" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />
      <StandardPage>
        <Heading>404</Heading>
        <Divider />
        <Text>This page does not exist!</Text>
      </StandardPage>
    </>
  );
};

export default withAuth(Home);
