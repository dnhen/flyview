import { Flex, Spinner } from '@chakra-ui/react';

export const LoadingScreen = () => {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Spinner size="xl" />
    </Flex>
  );
};
