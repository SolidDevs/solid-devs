import { useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getFeedbacks = async () => {
    const feedbacksArr = [];
    const getFireStore = query(collection(db, "feedback"));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc) =>
      feedbacksArr.push({ tid: doc.id, ...doc.data() })
    );
    setFeedbacks(feedbacksArr);
    setLoading(false);
  };

  return {
    feedbacks,
    getFeedbacks,
    isLoading,
  };
};

export default useFeedback;
