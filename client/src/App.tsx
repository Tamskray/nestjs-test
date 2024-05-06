import { useState } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";
import { TaskCardProps } from "./types/types";
import { statuses } from "./types/types";
import Modal from "./components/ui/Modal/Modal";
import useModal from "./hooks/useModal";

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
  const modalProps = useModal();

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
      {/* <TailwindLearning /> */}
      {/* <TailwindLearningList /> */}
      {/* <h1 className="px-10 py-10 font-semibold">Hello</h1> */}

      <body className="flex flex-col min-h-[130vh]">
        <div className="mt-12 px-10">
          <h1 className="text-center">My posts here</h1>
          <button
            className="my-4 bg-brand px-2 py-2 rounded-md"
            onClick={modalProps.onOpen}
          >
            Open modal
          </button>
        </div>

        <Modal {...modalProps}>hello</Modal>
      </body>
    </>
  );
}

export default App;
