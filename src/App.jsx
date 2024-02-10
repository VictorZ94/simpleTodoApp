// @packages
import { useEffect } from "react";
import { useState } from "react";

// @components
import FormTodo from "./components/FormTodo";
import CardTodo from "./components/CardTodo";

// @constants
import { defaultTask, initialValues } from "./constants";

function App() {
  const [todos, setTodos] = useState(defaultTask);
  const [singleTodo, setSingleTodo] = useState(initialValues);
  const [modeUpdate, setModeUpdate] = useState(false);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length !== 0) {
      setTodos(todos);
    }
  }, []);

  const handleTodo = (e) => {
    const { name, value } = e.target;
    setSingleTodo({
      ...singleTodo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("todos", JSON.stringify([...todos, singleTodo]));
    setTodos([
      ...todos,
      {
        ...singleTodo,
        id: todos.length + 1,
      },
    ]);
    setSingleTodo(initialValues);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const allTodos = [...todos];
    let updatedTodo = allTodos.filter((todo) => todo.id === singleTodo.id);
    const idx = allTodos.findIndex((todo) => todo.id === singleTodo.id);
    updatedTodo = singleTodo;
    allTodos[idx] = updatedTodo;
    localStorage.setItem("todos", JSON.stringify(allTodos));
    setTodos(allTodos);
    setSingleTodo(initialValues);
    setModeUpdate(false);
  };

  const handleRemove = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    console.log(removeTodo);
    localStorage.setItem("todos", JSON.stringify(removeTodo));
    setTodos(removeTodo);
  };

  const handleCompleted = (idx) => {
    const allTodos = [...todos];
    let updatedTodo = allTodos[idx];
    updatedTodo.completed = !updatedTodo.completed;
    allTodos[idx] = updatedTodo;
    localStorage.setItem("todos", JSON.stringify(allTodos));
    setTodos(allTodos);
  };

  return (
    <>
      <header className="w-full text-center mt-9">
        <h1 className="bg-clip-text hero-title bg-gradient-to-b from-slate-900 to-slate-900/70 dark:from-white dark:to-white/40 text-transparent border-none">
          Amazing Todos App
        </h1>
      </header>
      <section className="mt-10 sm:block md:flex justify-center space-x-4 p-4">
        <FormTodo
          singleTodo={singleTodo}
          handleTodo={handleTodo}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          modeUpdate={modeUpdate}
        />
        <div className="max-w-md flex-1 mt-7">
          <ul className="space-y-3">
            {todos.map((todo, index) => (
              <li key={todo.id}>
                <CardTodo
                  todo={todo}
                  index={index}
                  handleRemove={handleRemove}
                  handleCompleted={handleCompleted}
                  setSingleTodo={setSingleTodo}
                  setModeUpdate={setModeUpdate}
                ></CardTodo>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
