import { useEffect, useState } from 'react';

export const useFetch = <T,>(url: string, initialValue: any) => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [isApiSuccess, setIsApiSuccess] = useState<boolean>(true);

  const getAPIData = async () => {
    setLoading(true);
    console.log('Insiidee');
    try {
      console.log(url);
      const apiResponse = await fetch(url);
      const json: T = await apiResponse.json();
      console.log(apiResponse);
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

    return () => {
      isCancelled = true;
    };
  }, []);

  return { data, loading, isApiSuccess };
};
