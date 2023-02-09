import { SingleTask } from "../../single-task/single-task";
import { TaskContext } from "../../App";
import { useContext } from "react";

export const GroceryTask = () => {
  const { task, setTask } = useContext(TaskContext);

  const groTaskCompleted = task
    .filter((item) => {
      return item.name === "groceries" && item.completed == 1;
    })
    .map((item) => {
      return (
        <SingleTask
        key={item.id}
        title={item.title}
        id={item.id}
        date={item.date}
        completed={item.completed}
        collectionId={4}
        />
      );
    });
  const groTaskUncompleted = task
    .filter((item) => {
      return item.name === "groceries" && item.completed == 0;
    })
    .map((item) => {
      return (
        <SingleTask
        key={item.id}
        title={item.title}
        id={item.id}
        date={item.date}
        completed={item.completed}
        collectionId={4}
        />
      );
    });
  return (
    <div className="collection-summary">
      <div className="task-top">
        <p>Groceries'</p> <p>...</p>
      </div>
      <div className="task-add-form">
        {" "}
        <button>+</button>
        <p>Add task</p>
      </div>
      <div className="uncompleted-task">
        <p>Tasks-{groTaskUncompleted.length}</p>
        {groTaskUncompleted}
      </div>
      <div className="completed-task">
        <p>Completed-{groTaskCompleted.length}</p>
        {groTaskCompleted}
      </div>
    </div>
  );
};
