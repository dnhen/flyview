import { IFirestoreFlightDocument } from '@/hooks/useFlights';
import { MINUTES_AFTER_DEP_TO_DISPLAY, viewerWidths } from '@/pages/viewer';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface ViewerBodyProps {
  flights: IFirestoreFlightDocument[];
}

export const ViewerBody = ({ flights }: ViewerBodyProps) => {
  const [ticker, setTicker] = useState<number>(0);

  useEffect(() => {
    // To update state every 5 minutes and remove old flights
    const interval = setInterval(() => {
      setTicker(ticker + 1);
    }, 50000);

    return () => clearInterval(interval);
  });

  return (
    <Box h="calc(100vh - 144px)" overflowY="hidden">
      {flights.map((flight, i) => {
        const departureTimeDate = flight.data.actualDepartureTime.toDate();
        const boardingTimeDate = flight.data.actualBoardingTime.toDate();
        const timeBeforeToViewFlight = new Date();
        timeBeforeToViewFlight.setMinutes(timeBeforeToViewFlight.getMinutes() - MINUTES_AFTER_DEP_TO_DISPLAY);

        if (departureTimeDate < timeBeforeToViewFlight) {
          return;
        }

        return (
          <Flex key={i} alignItems="center" gap={{ base: '2', sm: '4', md: '6', lg: '8' }} w="full" h={{ base: '40px', sm: '40px', md: '60px', lg: '72px' }} px="8" bg="gray.900" _even={{ bg: 'gray.600' }}>
            <Text textStyle="viewerBody" color="white" w={viewerWidths.flight / 100}>
              {flight.data.flightNumber}
            </Text>
            <Text textStyle="viewerBody" color="white" w={viewerWidths.destination / 100}>
              {flight.data.destination}
            </Text>
            <Text textStyle="viewerBody" color="white" w={viewerWidths.sched / 100}>
              {`${('0' + departureTimeDate.getHours()).slice(-2)}:${('0' + departureTimeDate.getMinutes()).slice(-2)}`}
            </Text>
            <Text textStyle="viewerBody" color="white" w={viewerWidths.board / 100}>
              {`${('0' + boardingTimeDate.getHours()).slice(-2)}:${('0' + boardingTimeDate.getMinutes()).slice(-2)}`}
            </Text>
            <Text textStyle="viewerBody" color="white" w={viewerWidths.gate / 100}>
              {flight.data.gate}
            </Text>
            <Text textStyle="viewerBody" color="yellow.300" w={viewerWidths.remark / 100} decoration="blink">
              {flight.data.remark.toUpperCase()}
            </Text>
          </Flex>
        );
      })}
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
      <Flex w="full" h="72px" bg="gray.900" _even={{ bg: 'gray.600' }}></Flex>
    </Box>
  );
};
