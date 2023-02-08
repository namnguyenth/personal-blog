import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board/Board";
import Navigation from "./components/Navigation/Navigation";
import Direct from "./components/Direct/Direct";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board />
        <div className="Navigation-zone">
          <Navigation />
          <Direct />
        </div>
      </header>
    </div>
  );
}

export default App;
