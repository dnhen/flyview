import { LoadingScreen } from '@/components/LoadingScreen';
import { LogoIcon } from '@/components/LogoIcon';
import { useAuth } from '@/contexts/AuthContext';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
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
        <title>Login // Flight Information Display</title>
        <meta name="description" content="Login // Flight Information Display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex flexDir="column" alignItems="center" borderRadius="lg" border="4px" borderColor="jet.500" px="8" py="4" gap="4">
          <Icon as={LogoIcon} color="jet.500" boxSize="24" />
          <Text fontSize="4xl" color="jet.500">
            Login to FID
          </Text>
          <Button onClick={() => signInWithGoogle()} variant="solid" colorScheme="jet" leftIcon={<Icon as={FaGoogle} />}>
            Sign in with Google
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;

//
