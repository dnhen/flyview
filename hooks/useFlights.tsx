import { db } from '@/firebaseConfig';
import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useFlights = () => {
  const [flights, setFlights] = useState<IFirestoreFlightDocument[]>([]);

  useEffect(() => {
    onSnapshot(collection(db, 'flights'), (snapshot) => {
      setFlights(snapshot.docs.map((doc) => doc.data() as IFirestoreFlightDocument));
    });
  }, []);

  /***
   * Adds a flight to the firestore database
   *
   * @param {string} flightNumber the flight number
   * @param {string} destination the flight's destination
   * @param {Date} scheduledDepartureTime the scheduled departure time
   * @param {Date} scheduledBoardingTime the scheduled boarding time
   * @param {number} gate the flight's departure gate
   * @return a promise pointing to the newly created document reference
   */
  const addFlight = (flightNumber: string, destination: string, scheduledDepartureTime: Date, scheduledBoardingTime: Date, gate: number) => {
    const flightsColRef = collection(db, 'flights');
    return addDoc(flightsColRef, {
      flightNumber,
      destination,
      scheduledDepartureTime,
      actualDepartureTime: scheduledDepartureTime,
      scheduledBoardingTime,
      actualBoardingTime: scheduledBoardingTime,
      gate,
      remark: null,
      created: serverTimestamp()
    });
  };

  return {
    flights,
    addFlight
  };
};

interface IFirestoreFlightDocument {
  actualBoardingTime: IFirestoreTimestamp;
  actualDepartureTime: IFirestoreTimestamp;
  created: IFirestoreTimestamp;
  destination: string;
  flightNumber: string;
  gate: number;
  remark: string | null;
  scheduledBoardingTime: IFirestoreTimestamp;
  scheduledDepartureTime: IFirestoreTimestamp;
}

interface IFirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}
