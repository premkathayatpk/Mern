import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 px-2">Your Todos</h1>

      {todos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No tasks yet. Add one above!
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <span className="text-gray-700 font-medium">{todo.text}</span>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all"
                title="Delete Todo"
              >
                Delete{" "}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
