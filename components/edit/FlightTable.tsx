import { useAuth } from '@/contexts/AuthContext';
import { useFlights } from '@/hooks/useFlights';
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { FlightRow } from './FlightRow';

interface FlightTableProps {
  isEditable?: boolean;
  displayDateStart?: Date;
  displayDateEnd?: Date;
}

export const FlightTable = ({ isEditable = false }: FlightTableProps) => {
  const { currentUser } = useAuth();
  const airlineCode = currentUser!.uid; // Use the user's UID for airline code; TODO: update this to not be UID
  const { flights } = useFlights(airlineCode);

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
          {isEditable && <Th>Actions</Th>}
        </Tr>
      </Thead>
      <Tbody>
        {flights.map((flight, i) => {
          return <FlightRow key={i} flight={flight} isEditable={isEditable} />;
        })}
      </Tbody>
    </Table>
  );
};
