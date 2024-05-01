import { useState } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  return (
    <>
      <TaskCard title="some title" id="aaa" points="3" />
      <TaskCard title="some title2" id="aaa2" points="13" />
      <TaskCard title="some title3" id="aaa3" points="5" />
    </>
  );
}

export default App;
