import { useAuth } from '@/contexts/AuthContext';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { LogoIcon } from './LogoIcon';

export const Navbar = () => {
  const { logout } = useAuth();

  return (
    <Flex justifyContent="space-between" alignItems="center" w="full" h="60px" bg="jet.500" px={{ base: '0', sm: '8', md: '14', lg: '24' }} py="2" gap="4">
      <Flex alignItems="center" gap="4">
        <Icon as={LogoIcon} color="white" boxSize="8" />
        <Button colorScheme="jet">Home</Button>
        <Button colorScheme="jet">About</Button>
      </Flex>
      <Flex alignItems="center" gap="4">
        <Button colorScheme="jet" onClick={logout}>
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};
