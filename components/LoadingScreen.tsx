import { Flex, Icon, Spinner } from '@chakra-ui/react';
import Head from 'next/head';
import { LogoIcon } from './LogoIcon';

export const LoadingScreen = () => {
  return (
    <>
      <Head>
        <title>flyview</title>
      </Head>
      <Flex flexDir="column" w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Icon as={LogoIcon} boxSize="12" pos="absolute" color="jet.600" />
        <Spinner boxSize="16" color="jet.600" />
      </Flex>
    </>
  );
};
