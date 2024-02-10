import { Edit, Trash, CheckSquare } from "feather-icons-react";
import { useState } from "react";

const CardTodo = ({
  todo,
  index,
  handleRemove,
  handleCompleted,
  setSingleTodo,
  setModeUpdate,
}) => {
  const [error, setError] = useState(false);
  const { id, task, description, completed } = todo;

  if (error) {
    setTimeout(() => {
      setError(false);
    }, [3000]);
  }

  return (
    <div
      className={`${
        completed ? "opacity-70" : ""
      } w-full h-full bg-slate-700 space-y-5 p-4 rounded-xl`}
    >
      <div
        className={`${
          completed ? "line-through" : ""
        } text-lg font-bold dark:text-slate-50`}
      >
        Task: <span>{task}</span>
      </div>
      <div className="dark:text-slate-50">
        <b>Description:</b>{" "}
        <span className="italic">{description || "N/A"}</span>
      </div>
      <div className="flex space-x-2 mt-5 cursor-pointer">
        <Edit
          color="white"
          onClick={() => {
            if (completed) {
              setError(true);
              return;
            }
            setModeUpdate(true);
            setSingleTodo({
              id,
              task,
              description,
              completed,
            });
          }}
        />
        <Trash color="white" onClick={() => handleRemove(id)} />
        <CheckSquare
          color={completed ? "green" : "white"}
          onClick={() => handleCompleted(index)}
        />
      </div>
      {error && (
        <p className="text-red-500">{"You can't change a completed task"}</p>
      )}
    </div>
  );
};

export default CardTodo;
