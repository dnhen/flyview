import { db } from '@/firebaseConfig';
import { addDoc, collection, DocumentData, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useFlights = () => {
  const [flights, setFlights] = useState<DocumentData[]>([]);

  useEffect(() => {
    onSnapshot(collection(db, 'flights'), (snapshot) => {
      setFlights(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  /***
   * Adds a flight to the firestore database
   *
   * @param {string} flightNumber the flight number
   * @param {string} destination the flight's destination
   * @param {string} scheduledDepartureTime the scheduled departure time
   * @param {string} scheduledBoardingTime the scheduled boarding time
   * @param {number} gate the flight's departure gate
   * @return a promise pointing to the newly created document reference
   */
  const addFlight = (flightNumber: string, destination: string, scheduledDepartureTime: string, scheduledBoardingTime: string, gate: number) => {
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
