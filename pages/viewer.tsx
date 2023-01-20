import { ViewerBody } from '@/components/viewer/ViewerBody';
import { ViewerHeader } from '@/components/viewer/ViewerHeader';
import Head from 'next/head';

const Viewer = () => {
  return (
    <>
      <Head>
        <title>Viewer // Flight Information Display</title>
        <meta name="description" content="Viewer // Flight Information Display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewerHeader />
      <ViewerBody />
    </>
  );
};

export default Viewer;

export const viewerWidths = {
  flight: 14,
  destination: 28,
  sched: 10,
  board: 10,
  gate: 8,
  remark: 30
};
