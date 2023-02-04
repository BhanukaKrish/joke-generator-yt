import React from "react";
import useJokeGenerator from "./hooks/useJokeGenerator";

function App() {
  const [newJoke, setNewJoke] = React.useState(0);
  const { data, isPending, error } = useJokeGenerator(newJoke);

  const handleClick = () => {
    setNewJoke(newJoke + 1);
  };
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-orange-700 h-[25rem] flex w-1/2 rounded p-5 flex-col gap-5 items-center">
        <h1 className="text-4xl font-semibold  text-white">Joke Generator</h1>
        <div className="bg-white w-full h-1/2 rounded flex flex-col justify-center items-center text-center p-5 overflow-auto">
          <p className="text-2xl font-semibold text-gray-700">
            {isPending && 
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
            }
            {error && error}
            {data && data.joke}
          </p>
        </div>
        <button
          className="bg-black w-full h-16 rounded text-2xl font-semibold text-white  hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          Generate Joke
        </button>
      </div>
    </div>
  );
}

export default App;
