import { useEffect, useState } from 'react'
import { getFilterData, getProperty, getPropertyByCity, getPropertyByID } from '../core/api/Property';

export const useFetchProperty = () => {
  const [property, setProperty] = useState(null);
  const [propLoading, setPropLoading] = useState(true);
  const [propError, setPropError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getProperty();
        setProperty(data.data.property);
      } catch (error) {
        console.error("Error", error.message);
        setPropError(error.message);
      } finally {
        setPropLoading(false);
      }
    };

    fetchProperty();
  }, []);

  return { property, propLoading, propError };
};

export const useFectPropertyById = (id) => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyById = async () => {
      try {
        const data = await getPropertyByID(id);
        setCategory(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyById();
  }, []);

  return { category, loading, error };
}

export const useFectDataFilter = () => {
  const [dataFilter, setDataFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyById = async () => {
      try {
        const data = await getFilterData();
        setDataFilter(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyById();
  }, []);

  return { dataFilter, loading, error };

}

export const useFectPropertyByCity = () => {
  const [cities, setCities] = useState(null);
  const [cityLoading, setCityLoading] = useState(true);
  const [cityError, setCityError] = useState(null);

  useEffect(() => {
    const fetchPropertyByCity = async () => {
      try {
        const data = await getPropertyByCity();
        setCities(data.properties);
      } catch (error) {
        setCityError(error.message);
      } finally {
        setCityLoading(false);
      }
    };

    fetchPropertyByCity();
  }, []);

  return { cities, cityLoading, cityError };

}