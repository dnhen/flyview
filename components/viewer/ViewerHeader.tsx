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
          <Image alt={airlineName} src={logo} h={{ base: '12px', sm: '14px', md: '24px', lg: '40px', xl: '60px' }} />
        </Box>
        <Text textStyle="viewerHeaderTitle" color={textColor} lineHeight="1" w="60%" textAlign="center">
          Departures
        </Text>
        <Clock textColor={textColor} textStyle="viewerHeader" />
      </Flex>
      <Flex gap={{ base: '2', sm: '4', md: '6', lg: '8' }} w="full" bg={headerColor}>
        <Text textStyle="viewerHeader" color={textColor} w={viewerWidths.flight / 100}>
          Flight
        </Text>
        <Text textStyle="viewerHeader" color={textColor} w={viewerWidths.destination / 100}>
          Destination
        </Text>
        <Text textStyle="viewerHeader" color={textColor} w={viewerWidths.sched / 100}>
          Sched
        </Text>
        <Text textStyle="viewerHeader" color={textColor} w={viewerWidths.board / 100}>
          Board
        </Text>
        <Text textStyle="viewerHeader" color={textColor} w={viewerWidths.gate / 100}>
          Gate
        </Text>
        <Text textStyle="viewerHeader" color={textColor} w={viewerWidths.remark / 100}>
          Remark
        </Text>
      </Flex>
    </Box>
  );
};
