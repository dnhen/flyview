import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { useAuth } from '@/contexts/AuthContext';
import { withAuth } from '@/hoc/withAuth';
import { useFlights } from '@/hooks/useFlights';
import { Divider, Editable, EditableInput, EditablePreview, Heading, HStack, PinInput, PinInputField, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Head from 'next/head';
import { MINUTES_AFTER_DEP_TO_DISPLAY } from './viewer';

const Edit = () => {
  const { currentUser } = useAuth();
  const airlineCode = currentUser!.uid; // Use the user's UID for airline code
  const { flights, updateFlight } = useFlights(airlineCode);

  return (
    <>
      <Head>
        <title>Edit Flight // Flight Information Display</title>
        <meta name="description" content="Edit Flight // Flight Information Display" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />
      <StandardPage>
        <Heading>Edit Flight</Heading>
        <Divider />
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
              const boardingTimeDate = flight.data.actualBoardingTime.toDate();
              const timeBeforeToViewFlight = new Date();
              timeBeforeToViewFlight.setMinutes(timeBeforeToViewFlight.getMinutes() - MINUTES_AFTER_DEP_TO_DISPLAY);
              const noLongerVisible = departureTimeDate < timeBeforeToViewFlight;

              return (
                <Tr key={i} maxH="2" borderX="4px" borderColor={noLongerVisible ? 'red.600' : 'green.600'}>
                  <Td>
                    <Editable placeholder={flight.data.flightNumber} defaultValue={flight.data.flightNumber} onSubmit={(newValue) => newValue && updateFlight(flight.ref, { flightNumber: newValue })}>
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                  <Td>
                    <Editable placeholder={flight.data.destination} defaultValue={flight.data.destination} onSubmit={(newValue) => newValue && updateFlight(flight.ref, { destination: newValue })}>
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                  <Td>
                    <input
                      value={new Date(flight.data.actualDepartureTime.toDate() - timezoneOffset).toISOString().slice(0, 19)}
                      type="datetime-local"
                      onChange={(e) => e.target.value && updateFlight(flight.ref, { actualDepartureTime: new Date(e.target.value) })}
                    />
                  </Td>
                  <Td>
                    <input
                      value={new Date(flight.data.actualBoardingTime.toDate() - timezoneOffset).toISOString().slice(0, 19)}
                      type="datetime-local"
                      onChange={(e) => e.target.value && updateFlight(flight.ref, { actualBoardingTime: new Date(e.target.value) })}
                    />
                  </Td>
                  <Td>
                    <HStack>
                      <PinInput defaultValue={flight.data.gate.toString()} onChange={(newValue) => newValue && updateFlight(flight.ref, { gate: parseInt(newValue) })}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </HStack>
                  </Td>
                  <Td>
                    <Editable placeholder="empty" defaultValue={flight.data.remark} onSubmit={(newValue) => updateFlight(flight.ref, { remark: newValue })}>
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </StandardPage>
    </>
  );
};

export default withAuth(Edit);
