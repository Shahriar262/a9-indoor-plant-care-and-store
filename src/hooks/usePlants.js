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
        setTimeout(() => setPlants(data.data), 600);
      })
      .catch((err) => setError(err))
      .finally(() => setTimeout(() => setLoading(false), 600));
  }, []);

  return { plants, loading, error };
};

export default usePlants;
