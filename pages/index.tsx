import { useAuth } from '@/contexts/AuthContext';
import { withAuth } from '@/hoc/withAuth';
import { Button, Flex } from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
  const { currentUser, logout } = useAuth();

  console.log(currentUser);

  return (
    <>
      <Head>
        <title>Flight Information Display</title>
        <meta name="description" content="Flight Information Display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        Main body
        <Button onClick={logout}>Logout</Button>
      </Flex>
    </>
  );
};

export default withAuth(Home);
