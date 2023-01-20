import { useFlights } from '@/hooks/useFlights';
import { viewerWidths } from '@/pages/viewer';
import { Flex, Text } from '@chakra-ui/react';

export const ViewerBody = () => {
  const { flights } = useFlights();

  const flightsViewerRenderer = () => {
    return flights.map((flight, i) => {
      const departureTimeDate = new Date(flight.scheduledDepartureTime.seconds * 1000);
      const boardingTimeDate = new Date(flight.scheduledBoardingTime.seconds * 1000);
      return (
        <Flex key={i} gap="8" w="full" px="8">
          <Text fontSize="5xl" w={viewerWidths.flight / 100}>
            {flight.flightNumber}
          </Text>
          <Text fontSize="5xl" w={viewerWidths.destination / 100}>
            {flight.destination}
          </Text>
          <Text fontSize="5xl" w={viewerWidths.sched / 100}>
            {`${('0' + departureTimeDate.getHours()).slice(-2)}:${('0' + departureTimeDate.getMinutes()).slice(-2)}`}
          </Text>
          <Text fontSize="5xl" w={viewerWidths.board / 100}>
            {`${('0' + boardingTimeDate.getHours()).slice(-2)}:${('0' + boardingTimeDate.getMinutes()).slice(-2)}`}
          </Text>
          <Text fontSize="5xl" w={viewerWidths.gate / 100}>
            {flight.gate}
          </Text>
          <Text fontSize="5xl" w={viewerWidths.remark / 100}>
            {flight.remark}
          </Text>
        </Flex>
      );
    });
  };

  return <>{flightsViewerRenderer()}</>;
};