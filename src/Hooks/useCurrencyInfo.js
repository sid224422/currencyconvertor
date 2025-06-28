import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;
    fetch(`https://www.floatrates.com/daily/rub.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => {
        setData({});
        console.error("Failed to fetch currency data:", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;