import { useFlights } from '@/hooks/useFlights';
import { viewerWidths } from '@/pages/viewer';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const MINUTES_AFTER_DEP_TO_DISPLAY = 60 * 60;

export const ViewerBody = () => {
  const { flights } = useFlights();
  const [ticker, setTicker] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(ticker + 1);
    }, 50000);

    return () => clearInterval(interval);
  });

  const flightsViewerRenderer = () => {
    return flights.map((flight, i) => {
      const departureTimeDate = flight.actualDepartureTime.toDate();
      const boardingTimeDate = flight.actualBoardingTime.toDate();
      const timeBeforeToViewFlight = new Date();
      timeBeforeToViewFlight.setMinutes(timeBeforeToViewFlight.getMinutes() - MINUTES_AFTER_DEP_TO_DISPLAY);

      if (departureTimeDate < timeBeforeToViewFlight) {
        return;
      }

      return (
        <Flex key={i} gap="8" w="full" h="72px" px="8" bg="gray.900" _even={{ bg: 'gray.600' }}>
          <Text fontSize="5xl" color="white" w={viewerWidths.flight / 100}>
            {flight.flightNumber}
          </Text>
          <Text fontSize="5xl" color="white" w={viewerWidths.destination / 100}>
            {flight.destination}
          </Text>
          <Text fontSize="5xl" color="white" w={viewerWidths.sched / 100}>
            {`${('0' + departureTimeDate.getHours()).slice(-2)}:${('0' + departureTimeDate.getMinutes()).slice(-2)}`}
          </Text>
          <Text fontSize="5xl" color="white" w={viewerWidths.board / 100}>
            {`${('0' + boardingTimeDate.getHours()).slice(-2)}:${('0' + boardingTimeDate.getMinutes()).slice(-2)}`}
          </Text>
          <Text fontSize="5xl" color="white" w={viewerWidths.gate / 100}>
            {flight.gate}
          </Text>
          <Text fontSize="5xl" color="yellow.300" w={viewerWidths.remark / 100}>
            {flight.remark.toUpperCase()}
          </Text>
        </Flex>
      );
    });
  };

  return (
    <Box h="calc(100vh - 144px)" overflowY="hidden">
      {flightsViewerRenderer()}
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
