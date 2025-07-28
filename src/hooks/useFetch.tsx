import { useState, useEffect } from "react";
import axios from "axios";

type FetchResult = {
  data: any | null;
  loading: boolean;
  error: any | null;
};

export default function useFetch(url?: string): FetchResult {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    axios
      .get(url, {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
