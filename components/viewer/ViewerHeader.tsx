import { viewerWidths } from '@/pages/viewer';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Clock } from '../Clock';

interface ViewerHeaderProps {
  airlineName: string | undefined;
  logo: string | undefined;
  headerColor: string | undefined;
  textColor: string | undefined;
}

export const ViewerHeader = ({ airlineName, logo, headerColor, textColor }: ViewerHeaderProps) => {
  return (
    <Box w="full" bg={headerColor} px="8">
      <Flex justifyContent="space-between" alignItems="center" gap="8" w="full">
        <Box w="20%">
          <Image alt={airlineName} src={logo} h="60px" />
        </Box>
        <Text fontSize="7xl" color={textColor} lineHeight="1" w="60%" textAlign="center">
          Departures
        </Text>
        <Clock textColor={textColor} />
      </Flex>
      <Flex gap="8" w="full" bg={headerColor}>
        <Text fontSize="5xl" color={textColor} w={viewerWidths.flight / 100}>
          Flight
        </Text>
        <Text fontSize="5xl" color={textColor} w={viewerWidths.destination / 100}>
          Destination
        </Text>
        <Text fontSize="5xl" color={textColor} w={viewerWidths.sched / 100}>
          Sched
        </Text>
        <Text fontSize="5xl" color={textColor} w={viewerWidths.board / 100}>
          Board
        </Text>
        <Text fontSize="5xl" color={textColor} w={viewerWidths.gate / 100}>
          Gate
        </Text>
        <Text fontSize="5xl" color={textColor} w={viewerWidths.remark / 100}>
          Remark
        </Text>
      </Flex>
    </Box>
  );
};
