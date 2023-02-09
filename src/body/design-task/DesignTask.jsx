import { SingleTask } from "../../single-task/single-task";
import { TaskContext } from "../../App";
import { useContext } from "react";

export const DesignTask = () => {
  const { task, setTask } = useContext(TaskContext);

  const designTaskCompleted = task
    .filter((item) => {
      return item.name === "design" && item.completed == 1;
    })
    .map((item) => {
      return (
        <SingleTask
        key={item.id}
        title={item.title}
        id={item.id}
        date={item.date}
        completed={item.completed}
        collectionId={3}
        />
      );
    });
  const designTaskUncompleted = task
    .filter((item) => {
      return item.name === "design" && item.completed == 0;
    })
    .map((item) => {
      return (
        <SingleTask
        key={item.id}
        title={item.title}
        id={item.id}
        date={item.date}
        completed={item.completed}
        collectionId={3}
        />
      );
    });
  return (
    <div className="collection-summary">
      <div className="task-top">
        <p>School</p> <p>...</p>
      </div>
      <div className="task-add-form">
        {" "}
        <button>+</button>
        <p>Add task</p>
      </div>
      <div className="uncompleted-task">
        <p>Tasks-{designTaskUncompleted.length||0}</p>
        {designTaskUncompleted}
      </div>
      <div className="completed-task">
        <p>Completed-{designTaskCompleted.length||0}</p>
        {designTaskCompleted}
      </div>
    </div>
  );
};
