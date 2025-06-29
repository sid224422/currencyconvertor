import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => {
        setData({});
        console.error("Failed to fetch currency data:", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;