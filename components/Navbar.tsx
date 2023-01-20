import { useAuth } from '@/contexts/AuthContext';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { LogoIcon } from './LogoIcon';

export const Navbar = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Flex justifyContent="space-between" alignItems="center" w="full" bg="jet.500" px={{ base: '2', sm: '12', md: '20', lg: '48' }} py="2" gap="4" wrap="wrap">
      <Flex alignItems="center" gap="4">
        <Icon as={LogoIcon} color="white" boxSize="8" />
        <Button colorScheme="jet" onClick={() => router.push('/')}>
          Home
        </Button>
        <Button colorScheme="jet" onClick={() => router.push('/add')}>
          Add Flight
        </Button>
        <Button colorScheme="jet" onClick={() => router.push('/edit')}>
          Edit Flight
        </Button>
      </Flex>
      <Flex alignItems="center" gap="4">
        <Button variant="solid" onClick={() => window.open('/viewer')}>
          Viewer
        </Button>
        <Button colorScheme="jet" onClick={logout}>
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};
