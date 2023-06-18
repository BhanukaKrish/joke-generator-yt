import { useEffect, useState } from "react";

const useJokeGenerator = (newJoke) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jokeapi-v2.p.rapidapi.com/joke/Programming?type=single",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not fetch the data for that resource");
      }
      const responseData = await response.json();
      setData(responseData);
      setIsPending(false);
    };

    fetchData();
  }, [newJoke]);

  return { data, isPending };
};

export default useJokeGenerator;
