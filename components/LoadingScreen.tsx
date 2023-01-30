import { Flex, Icon, Spinner } from '@chakra-ui/react';
import { LogoIcon } from './LogoIcon';

export const LoadingScreen = () => {
  return (
    <Flex flexDir="column" w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Icon as={LogoIcon} boxSize="12" pos="absolute" />
      <Spinner boxSize="16" />
    </Flex>
  );
};
