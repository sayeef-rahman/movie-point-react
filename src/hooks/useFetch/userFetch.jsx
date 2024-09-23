import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../modules/utility/api/fetchDataFromApi";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setIsError(null);
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
        setIsError(false);
        setIsSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setIsSuccess(false);
      });
  }, [url]);

  return { data, loading, isError, isSuccess };
};

export default useFetch;
