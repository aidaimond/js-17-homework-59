import React, {useEffect, useState} from 'react';
import {Corns} from "../../../types";

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {

  const [jokes, setJokes] = useState<Corns>();

  const request = () => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const corns: Corns = await response.json();
        setJokes(prev => ({
          ...prev,
          value: corns.value
        }))
      }
    }
    fetchData().catch();
  }

  useEffect(() => {
    request()
  }, []);

  return (
    <div className="m-4 col border border-2 rounded-1 text-center">
      <p className="m-3">{jokes?.value}</p>
      <button
        className="btn btn-success m-2 w-25"
        onClick={request}
      >Add
      </button>
    </div>
  );
};

export default Jokes;