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
            "X-RapidAPI-Key":
              "f6f40103c4mshf23d29c70f8a0bap137182jsn235e76a27638",
            "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
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
