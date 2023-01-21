import { viewerWidths } from '@/pages/viewer';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Clock } from '../Clock';

export const ViewerHeader = () => {
  return (
    <Box w="full" bg="#DD0000" px="8">
      <Flex justifyContent="space-between" alignItems="center" gap="8" w="full">
        <Box w="20%">
          <Image src="qantasLogo.png" h="60px" />
        </Box>
        <Text fontSize="7xl" color="white" lineHeight="1" w="60%" textAlign="center">
          Departures
        </Text>
        <Clock />
      </Flex>
      <Flex gap="8" w="full" bg="#DD0000">
        <Text fontSize="5xl" color="white" w={viewerWidths.flight / 100}>
          Flight
        </Text>
        <Text fontSize="5xl" color="white" w={viewerWidths.destination / 100}>
          Destination
        </Text>
        <Text fontSize="5xl" color="white" w={viewerWidths.sched / 100}>
          Sched
        </Text>
        <Text fontSize="5xl" color="white" w={viewerWidths.board / 100}>
          Board
        </Text>
        <Text fontSize="5xl" color="white" w={viewerWidths.gate / 100}>
          Gate
        </Text>
        <Text fontSize="5xl" color="white" w={viewerWidths.remark / 100}>
          Remark
        </Text>
      </Flex>
    </Box>
  );
};
