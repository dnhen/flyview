import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const ContentCard = ({ children }: PropsWithChildren) => {
  return (
    <Box p="4" borderRadius="lg" border="1px" borderColor="gray.100" shadow="lg" mb="4" w="full" h="full" overflow="auto">
      {children}
    </Box>
  );
};
