import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string, initialValue: any) => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [isApiSuccess, setIsApiSuccess] = useState<boolean>(true);

  // Common function to make API calls
  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json: T = await apiResponse.json();
      setIsApiSuccess(apiResponse.ok);
      setData(json);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) getAPIData();

    // Clean up function. Used to cancel the current API call when any other API is called
    return () => {
      isCancelled = true;
    };
  }, []);

  return { data, loading, isApiSuccess };
};
