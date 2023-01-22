import { useAuth } from '@/contexts/AuthContext';
import { useFlights } from '@/hooks/useFlights';
import { Button, Flex, FormControl, FormLabel, HStack, Input, PinInput, PinInputField, Select, useToast } from '@chakra-ui/react';
import { useState } from 'react';

export const AddFlight = () => {
  const { currentUser } = useAuth();
  const airlineCode = currentUser!.uid; // Use the user's UID for airline code; TODO: update this to not be UID
  const { addFlight } = useFlights();
  const toast = useToast();
  const [flightPrefix, setFlightPrefix] = useState<string>();
  const [flightNumber, setFlightNumber] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const [scheduledDepartureTime, setScheduledDepartureTime] = useState<Date>();
  const [scheduledBoardingTimePrior, setScheduledBoardingTimePrior] = useState<number>();
  const [gate, setGate] = useState<number>();

  const handleAddFlight = () => {
    if (!flightPrefix || !flightNumber || !destination || !scheduledDepartureTime || !scheduledBoardingTimePrior || !gate) {
      toast({ title: 'Error adding flight.', description: 'You need to have a value in every input.', status: 'error', variant: 'left-accent', isClosable: true });
      return false;
    }

    const finalFlightNumber = `${flightPrefix} ${flightNumber}`; // Concat the flight prefix with the number

    // Get the boarding time by minusing the appropriate number of minutes from the departure time
    const finalScheduledBoardingTime = new Date(scheduledDepartureTime);
    finalScheduledBoardingTime.setMinutes(scheduledDepartureTime.getMinutes() - scheduledBoardingTimePrior);

    addFlight(airlineCode, finalFlightNumber, destination, scheduledDepartureTime, finalScheduledBoardingTime, gate)
      .then(() => {
        toast({ title: 'Flight added successfully.', description: 'The flight has successfully been added to the system', status: 'success', variant: 'left-accent', isClosable: true });
        return true;
      })
      .catch((error) => {
        toast({ title: 'Error adding flight.', description: 'Insertion error: ' + error, status: 'error', variant: 'left-accent', isClosable: true });
        return false;
      });
  };

  return (
    <Flex flexDir="column" gap="4">
      <FormControl>
        <FormLabel>Flight Prefix</FormLabel>
        <Input isRequired={true} placeholder="QF" onChange={(e) => setFlightPrefix(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Flight Number</FormLabel>
        <HStack>
          <PinInput onChange={(value) => setFlightNumber(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </FormControl>
      <FormControl>
        <FormLabel>Destination</FormLabel>
        <Input isRequired={true} placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Scheduled Departure Time</FormLabel>
        <input type="datetime-local" onChange={(e) => setScheduledDepartureTime(new Date(e.target.value))} />
      </FormControl>
      <FormControl>
        <FormLabel>Scheduled Boarding Time</FormLabel>
        <Select placeholder="Select an option" onChange={(e) => setScheduledBoardingTimePrior(parseInt(e.target.value))}>
          <option value="15">15 minutes before departure</option>
          <option value="20">20 minutes before departure</option>
          <option value="30">30 minutes before departure</option>
          <option value="40">40 minutes before departure</option>
          <option value="45">45 minutes before departure</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Gate</FormLabel>
        <HStack>
          <PinInput onChange={(value) => setGate(parseInt(value))}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </FormControl>
      <Button colorScheme="jet" w="min-content" onClick={handleAddFlight}>
        Add Flight
      </Button>
    </Flex>
  );
};
