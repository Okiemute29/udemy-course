import { useState, useEffect } from "react";

export function Usefetch(url) {
  const [data, setdata] = useState();
  const [ispendding, setispending] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      setispending(true);
      try {
        const res = await fetch(url);
        // console.log(res);
        if (!res.ok) {
          throw new error(res.statusText);
        }
        const json = await res.json();
        setispending(false);
        setdata(json);
      } catch (err) {
        seterror("could not fetch data");
        // console.log(err.message);
      }
    };
    fetchdata();
  }, [url, error]);

  return { data, ispendding, error };
}
