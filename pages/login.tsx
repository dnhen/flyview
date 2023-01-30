import { LoadingScreen } from '@/components/LoadingScreen';
import { LogoIcon } from '@/components/LogoIcon';
import { useAuth } from '@/contexts/AuthContext';
import { Button, Card, CardBody, Flex, Icon, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaCheck, FaGoogle } from 'react-icons/fa';

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
      <Flex flexDir="column" w="100vw" h={{ base: 'full', lg: '100vh' }} alignItems="center" justifyContent="center" gap="8" p="8">
        <Image src="https://user-images.githubusercontent.com/69449713/213912081-2a67d5f2-8c74-49ee-8cdd-7faca1e2e7a3.png" w={{ base: '80%', lg: '25vw' }} />
        <Card>
          <CardBody p="0">
            <Flex gap="4" flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
              <Flex flexDir="column" justifyContent="center" alignItems="center" gap="4" p="8" w={{ base: '100%', lg: 'max-content' }}>
                <Icon as={LogoIcon} color="jet.500" boxSize="24" />
                <Text fontSize="4xl" color="jet.500">
                  Login to flyview
                </Text>
                <Button onClick={() => signInWithGoogle()} variant="solid" colorScheme="jet" leftIcon={<Icon as={FaGoogle} />}>
                  Sign in with Google
                </Button>
              </Flex>
              <Flex flexDir="column" justifyContent="center" gap="4" bg="jet.600" borderRightRadius={{ base: 'none', lg: 'md' }} p="8" w={{ base: '100%', lg: '25vw' }}>
                <Text fontSize="lg" fontWeight="medium" color="white">
                  Login for free and get access to:
                </Text>
                <List spacing="2" color="white">
                  <ListItem>
                    <ListIcon as={FaCheck} color="green.500" />
                    Create an airline
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheck} color="green.500" />
                    Get a unique airline code to share with friends
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheck} color="green.500" />
                    Manage your airline name, colour, and logo
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheck} color="green.500" />
                    Add flights to your schedule
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheck} color="green.500" />
                    View your daily flights on the flight information display
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheck} color="green.500" />
                    Share your FID with friends and update flights in real-time
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheck} color="green.500" />
                    New features added often...
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Login;

//
