import { PropTypes } from "prop-types";

const FormTodo = ({
  singleTodo,
  handleTodo,
  handleSubmit,
  modeUpdate,
  handleUpdate,
}) => {
  return (
    <form
      className="flex-1 max-w-md"
      onSubmit={(e) => {
        modeUpdate ? handleUpdate(e) : handleSubmit(e);
      }}
    >
      <div className="mb-5">
        <label
          htmlFor="task"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Task
        </label>
        <input
          type="text"
          id="task"
          name="task"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="🗻 Go to the montains"
          required
          value={singleTodo?.task}
          onChange={handleTodo}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          rows="4"
          name="description"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a short description..."
          value={singleTodo?.description}
          onChange={handleTodo}
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {modeUpdate ? "Update" : "Create"} todo
      </button>
    </form>
  );
};

export default FormTodo;

FormTodo.propTypes = {
  singleTodo: PropTypes.object.isRequired,
  handleTodo: PropTypes.func,
  handleSubmit: PropTypes.func,
  modeUpdate: PropTypes.bool,
  handleUpdate: PropTypes.func,
};
