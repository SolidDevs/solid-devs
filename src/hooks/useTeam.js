import { useState } from 'react';
import {
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from '@/firebase/firebase';

const useTeam = () => {
  const [team, setTeam] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getTeam = async () => {
    const teamArr = []
    const getFireStore = query(collection(db, "ourTeam"))
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc) => teamArr.push({ tid: doc.id, ...doc.data() }));
    setTeam(teamArr);
    setLoading(false)
  }

  return {
    team,
    getTeam,
    isLoading,
  };
};

export default useTeam;