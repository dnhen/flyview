import { IFirestoreFlightDocument, useFlights } from '@/hooks/useFlights';
import { MINUTES_AFTER_DEP_TO_DISPLAY } from '@/pages/viewer';
import { Collapse, Editable, EditableInput, EditablePreview, HStack, IconButton, PinInput, PinInputField, Select, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { DocumentData, DocumentReference } from 'firebase/firestore';
import { FaTrash } from 'react-icons/fa';

interface FlightRowProps {
  flight: IFirestoreFlightDocument;
  isEditable: boolean;
}

export const FlightRow = ({ flight, isEditable }: FlightRowProps) => {
  const { updateFlight, deleteFlight } = useFlights();
  const { isOpen: isCustomRemarkOpen, onOpen: onCustomRemarkOpen, onClose: onCustomRemarkClose } = useDisclosure();

  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const departureTimeDate = flight.data.actualDepartureTime.toDate();
  const timeBeforeToViewFlight = new Date();
  timeBeforeToViewFlight.setMinutes(timeBeforeToViewFlight.getMinutes() - MINUTES_AFTER_DEP_TO_DISPLAY);
  const noLongerVisible = departureTimeDate < timeBeforeToViewFlight;

  const handleRemarkChange = (flightRef: DocumentReference<DocumentData>, newValue: string) => {
    if (newValue === 'custom') {
      // Show the custom input field
      onCustomRemarkOpen();
    } else {
      // Update to the new value (not custom)
      onCustomRemarkClose();
      updateFlight(flightRef, { remark: newValue });
    }
  };

  return (
    <Tr maxH="2" borderX="4px" borderColor={noLongerVisible ? 'red.600' : 'green.600'}>
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
        <Select minW="150px" onChange={(e) => handleRemarkChange(flight.ref, e.target.value)} value={flight.data.remark}>
          <option value="">empty</option>
          <option value="Go to gate">Go To Gate</option>
          <option value="Boarding">Boarding</option>
          <option value="Final Call">Final Call</option>
          <option value="Flt Closed">Flight Closed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="custom">custom</option>
        </Select>
        <Collapse in={isCustomRemarkOpen} animateOpacity>
          <Editable isDisabled={!isEditable} placeholder="empty" defaultValue={flight.data.remark} onSubmit={(newValue) => updateFlight(flight.ref, { remark: newValue })}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Collapse>
      </Td>
      {isEditable && (
        <Td>
          <IconButton aria-label={'delete'} icon={<FaTrash />} border="1px" borderColor="red.600" color="red.600" onClick={() => deleteFlight(flight.ref)} />
        </Td>
      )}
    </Tr>
  );
};
