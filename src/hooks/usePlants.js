import axios from "axios";
import { useEffect, useState } from "react";

const usePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../plantsData.json")
      .then((data) => {
        console.log("json loaded: ", data.data);
        
        setTimeout(() => setPlants(data.data), 800)
      })
      .catch((err) => setError(err))
      .finally(() => setTimeout(() => setLoading(false), 800))
  }, []);

  return { plants, loading, error };
};

export default usePlants;