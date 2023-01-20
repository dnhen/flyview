import { Box, Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const StandardPage = ({ children }: PropsWithChildren) => {
  return (
    <Flex justifyContent="center" mt="8">
      <Box px={{ base: '2', sm: '12', md: '20', lg: '48' }}>{children}</Box>
    </Flex>
  );
};
