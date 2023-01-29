import { db } from '@/firebaseConfig';
import { addDoc, collection, deleteDoc, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useFlights = (airlineCode: string = '') => {
  const [flights, setFlights] = useState<IFirestoreFlightDocument[]>([]);

  useEffect(() => {
    const pastMidnight = new Date();
    pastMidnight.setHours(0, 0, 0, 0); // Get the first midnight in the past (start of current day)
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0); // Get the first midnight in the future (end of current day)

    const flightsRef = collection(db, 'flights');
    const q = query(flightsRef, where('airlineCode', '==', airlineCode), where('actualDepartureTime', '>', pastMidnight), where('actualDepartureTime', '<', nextMidnight), orderBy('actualDepartureTime'), orderBy('scheduledDepartureTime'));

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

  /***
   * Update a flight in the firestore database
   *
   * @param {DocumentReference} docRef the reference to the flight document to update
   * @param {object} newValues the new values to store in the document
   * @return a promise resolving once the data is successfully written
   */
  const updateFlight = (docRef: DocumentReference, newValues: {}) => {
    return updateDoc(docRef, newValues);
  };

  /***
   * Delete a flight in the firestore database
   *
   * @param {DocumentReference} docRef the reference to the flight document to delete
   * @return a promise resolving once the data is successfully deleted
   */
  const deleteFlight = (docRef: DocumentReference) => {
    return deleteDoc(docRef);
  };

  return {
    flights,
    addFlight,
    updateFlight,
    deleteFlight
  };
};

export interface IFirestoreFlightDocument {
  ref: DocumentReference;
  data: DocumentData;
}
