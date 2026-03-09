import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { members } from "./members";

const App = () => {
  return (
    <div className="tc">
      <h1>Kotier Corporation</h1>
      <SearchBox />
      <CardList members={members} />
    </div>
  );
};

export default App;
