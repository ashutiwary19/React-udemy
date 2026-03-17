import { useEffect, useState } from "react";
import { fetchUserPlaces, updateUserPlaces } from "../http.js";

export default function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const userPlace = await fetchFn();
        setFetchedData(userPlace);
      } catch (error) {
        console.log(error);
        setError({ message: error.message || "Failed to fetch data" });
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [fetchFn]);

  return { isFetching, fetchedData, setFetchedData, error };
}
