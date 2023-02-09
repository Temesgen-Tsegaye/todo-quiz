import { SingleTask } from "../../single-task/single-task";
import { TaskContext } from "../../App";
import { useContext } from "react";
export const SchoolTask = () => {
  const { task, setTask } = useContext(TaskContext);

  const schoolTaskCompleted = task
    .filter((item) => {
      return item.name === "school" && item.completed == 1;
    })
    .map((item) => {
      return (
        <SingleTask
          key={item.id}
          title={item.title}
          id={item.id}
          date={item.date}
          completed={item.completed}
          collectionId={1}
        />
      );
    });
  const schoolTaskUncompleted = task
    .filter((item) => {
      return item.name === "school" && item.completed == 0;
    })
    .map((item) => {
      return (
        <SingleTask
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          completed={item.completed}
          collectionId={1}
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
        <p>Tasks-{schoolTaskUncompleted.length}</p>
        {schoolTaskUncompleted}

      </div>
      <div className="completed-task">
        <p>Completed-{schoolTaskCompleted.length}</p>
        {schoolTaskCompleted}

      </div>
    </div>
  );
};
