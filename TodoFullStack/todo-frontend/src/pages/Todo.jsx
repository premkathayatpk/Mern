import React, { useEffect, useState } from "react";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null); 

  // Fetch all todos
  const getTodo = async () => {
    try {
      const res = await fetch("http://localhost:5000/getTodo", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.log("Error Getting todos", error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  // Add a new todo
  const addTodo = async () => {
    try {
      const res = await fetch("http://localhost:5000/addTodo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, date: date }),
      });
      await res.json();
      getTodo(); 
    } catch (error) {
      console.log("Error adding todos", error);
    }
  };

  const handleEditClick = (item) => {
    setEditId(item._id);
    setTitle(item.title);
    setDate(item.date);
  };


  const updateTodo = async (_id) => {
    try {
      const res = await fetch(`http://localhost:5000/updateTodo/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, date: date }),
      });
      await res.json();
      setEditId(null);
      getTodo(); 
    } catch (error) {
      console.log("Error Updating todo", error);
    }
  };

  // Delete a specific todo
  const deleteTodo = async (_id) => {
    try {
      const res = await fetch(`http://localhost:5000/deleteTodo/${_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      getTodo();
    } catch (error) {
      console.log("Error Deleting todo", error);
    }
  };

  // Clear all todos
  const clearTodo = async () => {
    try {
      const res = await fetch(`http://localhost:5000/clearTodo`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      getTodo();
    } catch (error) {
      console.log("Error clearing todos", error);
    }
  };

  // Handles both Add and Update submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; 

    if (editId) {
      updateTodo(editId);
    } else {
      addTodo();
    }

    // Reset inputs
    setTitle("");
    setDate("");
  };

  // Cancels editing state back to regular add state
  const cancelEdit = () => {
    setEditId(null);
    setTitle("");
    setDate("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 py-6 px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Task Manager
          </h1>
          <p className="text-indigo-100 text-sm mt-1">
            Keep your day structured
          </p>
        </div>

        <div className="p-8">
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                className="flex-1 bg-slate-50 py-2.5 px-4 text-base rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-slate-700"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
                required
              />

              <input
                type="date"
                className="bg-slate-50 py-2.5 px-4 text-base border border-slate-200 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-slate-600"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />

              <button
                type="submit"
                className={`px-6 py-2.5 rounded-xl text-white font-semibold shadow-md transition-all duration-200 cursor-pointer ${
                  editId
                    ? "bg-amber-500 hover:bg-amber-600 shadow-amber-200"
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200"
                }`}
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>

            {editId && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="text-xs text-slate-500 hover:text-slate-700 underline cursor-pointer"
                >
                  Cancel Edit
                </button>
              </div>
            )}
          </form>

          {/* Todo List */}
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {todos.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm">
                No tasks available. Add some goals above!
              </div>
            ) : (
              todos.map((item) => (
                <div
                  key={item._id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-150 ${
                    editId === item._id
                      ? "bg-amber-50 border-amber-300 ring-2 ring-amber-100"
                      : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col pr-4 overflow-hidden">
                    <span className="text-slate-800 font-medium truncate text-base">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">
                      {item.date
                        ? new Date(item.date).toLocaleDateString()
                        : "No Date"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleEditClick(item)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTodo(item._id)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Controls */}
          {todos.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
              <button
                type="button"
                onClick={clearTodo}
                className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-6 rounded-xl text-sm transition-all shadow-md shadow-rose-100 cursor-pointer"
              >
                Clear All Tasks
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
