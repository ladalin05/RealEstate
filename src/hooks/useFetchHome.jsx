import { useEffect, useState } from "react";
import { getCategory } from "../core/api/HomeAPI";

export const useFetchCategory = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategory();
        setCategory(data.data.categories);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  return { category, loading, error };
};

