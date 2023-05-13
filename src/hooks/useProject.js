import { useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const useProject = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProjects = async () => {
    const projectsArr = [];
    const getFireStore = query(collection(db, "projects"));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc) =>
      projectsArr.push({ tid: doc.id, ...doc.data() })
    );
    setProjects(projectsArr);
    setLoading(false);
  };

  return {
    projects,
    getProjects,
    isLoading,
  };
};

export default useProject;
