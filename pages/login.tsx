import { LoadingScreen } from '@/components/LoadingScreen';
import { LogoIcon } from '@/components/LogoIcon';
import { useAuth } from '@/contexts/AuthContext';
import { Button, Card, CardBody, Flex, Icon, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const router = useRouter();
  const { isAuthLoading, currentUser, signInWithGoogle } = useAuth();

  if (isAuthLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthLoading && currentUser) {
    router.push('/');
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Login | flyview</title>
        <meta name="description" content="Login | flyview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Card>
          <CardBody>
            <Flex flexDir="column" alignItems="center" gap="4">
              <Icon as={LogoIcon} color="jet.500" boxSize="24" />
              <Text fontSize="4xl" color="jet.500">
                Login to flyview
              </Text>
              <Button onClick={() => signInWithGoogle()} variant="solid" colorScheme="jet" leftIcon={<Icon as={FaGoogle} />}>
                Sign in with Google
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Login;

//
