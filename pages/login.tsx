import { LoadingScreen } from '@/components/LoadingScreen';
import { useAuth } from '@/contexts/AuthContext';
import { Button, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
      <Flex>
        <Button onClick={() => signInWithGoogle()}>Sign in with Google</Button>
      </Flex>
    </>
  );
};

export default Login;
