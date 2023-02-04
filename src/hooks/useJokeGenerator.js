import { useEffect, useState } from "react";

const useJokeGenerator = (newJoke) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://jokeapi-v2.p.rapidapi.com/joke/Programming?type=single",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    };
    fetchData();
  }, [newJoke]);

  return { data, isPending, error };
};

export default useJokeGenerator;
