import { FlightTable } from '@/components/edit/FlightTable';
import { Navbar } from '@/components/Navbar';
import { StandardPage } from '@/components/StandardPage';
import { withAuth } from '@/hoc/withAuth';
import { Card, CardBody, Divider, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';

const Edit = () => {
  const [editDate, setEditDate] = useState<Date>(new Date(new Date().setHours(0, 0, 0, 0)));

  return (
    <>
      <Head>
        <title>Edit Flight | flyview</title>
        <meta name="description" content="Edit Flight | flyview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <StandardPage>
        <Heading mb="2">Edit Flight</Heading>
        <Divider />
        {/*}
        <FormControl>
          <FormLabel>Flights Date</FormLabel>
          <input type="date" onChange={(e) => setEditDate(new Date(new Date(e.target.value).setHours(0, 0, 0, 0)))} />
        </FormControl>
        {*/}
        <Card>
          <CardBody overflowX="auto">
            <FlightTable isEditable={true} displayDateStart={editDate} displayDateEnd={new Date(new Date(editDate).setHours(24, 0, 0, 0))} />
          </CardBody>
        </Card>
      </StandardPage>
    </>
  );
};

export default withAuth(Edit);
