import { db } from '@/firebaseConfig';
import { addDoc, collection, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, Timestamp, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useFlights = (airlineCode: string = '') => {
  const [flights, setFlights] = useState<IFirestoreFlightDocument[]>([]);

  useEffect(() => {
    const flightsRef = collection(db, 'flights');
    const q = query(flightsRef, where('airlineCode', '==', airlineCode), orderBy('scheduledDepartureTime'));
    onSnapshot(q, (snapshot) => {
      setFlights(
        snapshot.docs.map((doc) => ({
          ref: doc.ref,
          data: doc.data()
        }))
      );
    });
  }, [airlineCode]);

  /***
   * Adds a flight to the firestore database
   *
   * @param {string} airlineCode the airline's code
   * @param {string} flightNumber the flight number
   * @param {string} destination the flight's destination
   * @param {Date} scheduledDepartureTime the scheduled departure time
   * @param {Date} scheduledBoardingTime the scheduled boarding time
   * @param {number} gate the flight's departure gate
   * @return a promise pointing to the newly created document reference
   */
  const addFlight = (airlineCode: string, flightNumber: string, destination: string, scheduledDepartureTime: Date, scheduledBoardingTime: Date, gate: number) => {
    const flightsColRef = collection(db, 'flights');
    return addDoc(flightsColRef, {
      airlineCode,
      flightNumber,
      destination,
      scheduledDepartureTime,
      actualDepartureTime: scheduledDepartureTime,
      scheduledBoardingTime,
      actualBoardingTime: scheduledBoardingTime,
      gate,
      remark: '',
      created: serverTimestamp()
    });
  };

  const updateFlight = (docRef: DocumentReference, newValues: {}) => {
    return updateDoc(docRef, newValues);
  };

  return {
    flights,
    addFlight,
    updateFlight
  };
};

export interface IFirestoreFlightDocument {
  ref: DocumentReference;
  data: DocumentData;
}

interface IFirestoreFlightData {
  actualBoardingTime: Timestamp;
  actualDepartureTime: Timestamp;
  created: Timestamp;
  destination: string;
  flightNumber: string;
  gate: number;
  remark: string;
  scheduledBoardingTime: Timestamp;
  scheduledDepartureTime: Timestamp;
}
