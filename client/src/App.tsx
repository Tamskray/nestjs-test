import { useState } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";
import { TaskCardProps } from "./types/types";
import { statuses } from "./types/types";
import TailwindLearning from "./components/TailwindLearning";
import TailwindLearningList from "./components/TailwindLearning.List";

const taskCards: TaskCardProps[] = [
  { id: "a1", title: "some title", points: 3, status: "todo" },
  { id: "a2", title: "some title 2", status: "todo" },
  { id: "a3", title: "some title 3", points: 15, status: "todo" },
  { id: "a4", title: "some title 4", points: 33, status: "planned" },
  { id: "a5", title: "some title 5", points: 2, status: "in-progress" },
  { id: "a6", title: "some title 6", points: 12, status: "in-progress" },
  { id: "a7", title: "some title 7", points: 4, status: "in-progress" },
  { id: "a8", title: "some title 8", points: 7, status: "in-progress" },
  { id: "a9", title: "some title 9", points: 15, status: "closed" },
  { id: "a10", title: "some title 10", points: 2, status: "closed" },
];

function App() {
  const columns = statuses.map((status) => {
    const taskInColumn = taskCards.filter((task) => task.status === status);
    return {
      title: status,
      taskCards: taskInColumn,
    };
  });

  return (
    <>
      {/* <div>
        <h1>My Task Board</h1>
      </div>
      <div className="flex divide-y">
        {columns.map((column) => (
          <div>
            <h1>{column.title}</h1>
            {column.taskCards.map((card) => (
              <TaskCard key={card.id} {...card} />
            ))}
          </div>
        ))}
      </div> */}
      <TailwindLearning />
      <TailwindLearningList />
    </>
  );
}

export default App;
