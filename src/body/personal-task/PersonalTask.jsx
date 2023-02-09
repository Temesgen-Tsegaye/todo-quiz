import { SingleTask } from "../../single-task/single-task";
import { TaskContext } from "../../App";
import { useContext } from "react";

export const PersonalTask = () => {
  const { task, setTask } = useContext(TaskContext);

  const personalTaskCompleted = task
    .filter((item) => {
      return item.name === "personal" && item.completed == 1;
    })
    .map((item) => {
      return (
        <SingleTask
        key={item.id}
        title={item.title}
        id={item.id}
        date={item.date}
        completed={item.completed}
        collectionId={2}
        />
      );
    });
  const personalTaskUncompleted = task
    .filter((item) => {
      return item.name === "personal" && item.completed == 0;
    })
    .map((item) => {
      return (
        <SingleTask
        key={item.id}
        title={item.title}
        id={item.id}
        date={item.date}
        completed={item.completed}
        collectionId={2}
        />
      );
    });

  return (
    <div className="collection-summary">
      <div className="task-top">
        <p>Personal</p> <p>...</p>
      </div>
      <div className="task-add-form">
        {" "}
        <button>+</button>
        <p>Add task</p>
      </div>
      <div className="uncompleted-task">
        <p>Tasks-{personalTaskUncompleted.length||0}</p>
        {personalTaskUncompleted}
      </div>
      <div className="completed-task">
        <p>Completed-{personalTaskUncompleted.length||0}</p>
        {personalTaskCompleted}
      </div>
    </div>
  );
};
