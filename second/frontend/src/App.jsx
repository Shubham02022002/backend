/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const resp = await axios.get("/api/jokes");
    setJokes(resp.data);
  };

  return (
    <>
      <h1>good to go</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <h2>{joke.content}</h2>
        </div>
      ))}
    </>
  );
};

export default App;
