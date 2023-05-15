import { useState } from "react";
import { query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const useService = (collection) => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getServices = async () => {
    const servicesArr = [];
    const getFireStore = query(collection(db, collection));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc) =>
      servicesArr.push({ tid: doc.id, ...doc.data() })
    );
    setServices(servicesArr);
    setLoading(false);
  };

  return {
    services,
    getServices,
    isLoading,
  };
};

export default useService;
