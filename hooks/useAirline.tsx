import { db } from '@/firebaseConfig';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useAirline = (airlineCode: string = '') => {
  const [airlineData, setAirlineData] = useState<IAirlineData>();

  useEffect(() => {
    if (!airlineCode) return;

    const airlineDocRef = doc(db, 'airlines', airlineCode);

    onSnapshot(airlineDocRef, (doc) => {
      setAirlineData({
        name: doc.data()?.name || 'Unnamed',
        logo: doc.data()?.logo || 'https://via.placeholder.com/728x143',
        headerColor: doc.data()?.headerColor || '#2A272A',
        textColor: doc.data()?.textColor || '#FFFFFF'
      });
    });
  }, [airlineCode]);

  /***
   * Update the airline in the firestore database
   *
   * @param {object} newValues the new values to store in the document
   * @return a promise resolving once the data is successfully written
   */
  const updateAirline = (newValues: {}) => {
    const airlineDocRef = doc(db, 'airlines', airlineCode);

    return setDoc(airlineDocRef, newValues, { merge: true });
  };

  return {
    airlineData,
    updateAirline
  };
};

interface IAirlineData {
  name: string;
  logo: string;
  headerColor: string;
  textColor: string;
}
