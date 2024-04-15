import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

type UseFetchReturnType<T> = {
    data:T|null;
    error:Error| null;
    loading:boolean;
    refetch:() => void;
}

// Custom hook for fetching data
const useFetch = <T,> (url:string):UseFetchReturnType<T> => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null >(null);
  const [loading, setLoading] = useState(false);
  const [refetchIndex, setRefetchIndex] = useState(0);

  // Function to trigger a refetch
  const refetch = useCallback(() => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1), []);

  // Effect for initial fetch and refetch
  useEffect(() => {
    // Avoid duplicative requests by cancelling the previous request
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        setData(response.data);
        setError(null);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error as Error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if the component unmounts
    return () => source.cancel('Component unmounted, request is cancelled');
  }, [url, refetchIndex]); // Dependency array includes url and refetchIndex to refetch when these values change

  return { data, error, loading, refetch };
};

export default useFetch;