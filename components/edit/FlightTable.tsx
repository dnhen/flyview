import { useAuth } from '@/contexts/AuthContext';
import { useFlights } from '@/hooks/useFlights';
import { MINUTES_AFTER_DEP_TO_DISPLAY } from '@/pages/viewer';
import { Editable, EditableInput, EditablePreview, HStack, PinInput, PinInputField, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface FlightTableProps {
  isEditable?: boolean;
  displayDateStart?: Date;
  displayDateEnd?: Date;
}

export const FlightTable = ({ isEditable = false }: FlightTableProps) => {
  const { currentUser } = useAuth();
  const airlineCode = currentUser!.uid; // Use the user's UID for airline code; TODO: update this to not be UID
  const { flights, updateFlight } = useFlights(airlineCode);

  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Flight Number</Th>
          <Th>Destination</Th>
          <Th>Departure Time</Th>
          <Th>Boarding Time</Th>
          <Th>Gate</Th>
          <Th>Remark</Th>
        </Tr>
      </Thead>
      <Tbody>
        {flights.map((flight, i) => {
          const timezoneOffset = new Date().getTimezoneOffset() * 60000;
          const departureTimeDate = flight.data.actualDepartureTime.toDate();
          const timeBeforeToViewFlight = new Date();
          timeBeforeToViewFlight.setMinutes(timeBeforeToViewFlight.getMinutes() - MINUTES_AFTER_DEP_TO_DISPLAY);
          const noLongerVisible = departureTimeDate < timeBeforeToViewFlight;

          return (
            <Tr key={i} maxH="2" borderX="4px" borderColor={noLongerVisible ? 'red.600' : 'green.600'}>
              <Td>
                <Editable isDisabled={!isEditable} placeholder={flight.data.flightNumber} defaultValue={flight.data.flightNumber} onSubmit={(newValue) => newValue && updateFlight(flight.ref, { flightNumber: newValue })}>
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <Editable isDisabled={!isEditable} placeholder={flight.data.destination} defaultValue={flight.data.destination} onSubmit={(newValue) => newValue && updateFlight(flight.ref, { destination: newValue })}>
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td>
                <input
                  disabled={!isEditable}
                  value={new Date(flight.data.actualDepartureTime.toDate() - timezoneOffset).toISOString().slice(0, 19)}
                  type="datetime-local"
                  onChange={(e) => e.target.value && updateFlight(flight.ref, { actualDepartureTime: new Date(e.target.value) })}
                />
              </Td>
              <Td>
                <input
                  disabled={!isEditable}
                  value={new Date(flight.data.actualBoardingTime.toDate() - timezoneOffset).toISOString().slice(0, 19)}
                  type="datetime-local"
                  onChange={(e) => e.target.value && updateFlight(flight.ref, { actualBoardingTime: new Date(e.target.value) })}
                />
              </Td>
              <Td>
                <HStack>
                  <PinInput isDisabled={!isEditable} defaultValue={flight.data.gate.toString()} onChange={(newValue) => newValue && updateFlight(flight.ref, { gate: parseInt(newValue) })}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Td>
              <Td>
                <Editable isDisabled={!isEditable} placeholder="empty" defaultValue={flight.data.remark} onSubmit={(newValue) => updateFlight(flight.ref, { remark: newValue })}>
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
