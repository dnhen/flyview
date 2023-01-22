import { Box, Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const StandardPage = ({ children }: PropsWithChildren) => {
  return (
    <Flex mt="8" w="full">
      <Box px={{ base: '2', sm: '12', md: '20', lg: '28', xl: '48' }} w="full">
        {children}
      </Box>
    </Flex>
  );
};
