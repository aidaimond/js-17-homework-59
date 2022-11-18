import React from 'react';
import NewMovieCl from "./containers/container-task-1/NewMovieCl/NewMovieCl";
import Jokes from "./containers/container-task-2/Jokes/Jokes";

function App() {
  return (
    <div className="d-flex">
      <NewMovieCl/>
      <Jokes/>
    </div>
  );
}

export default App;
