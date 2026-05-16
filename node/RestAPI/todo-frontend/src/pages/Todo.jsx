import React, { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("todos");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const handleDelete = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className=" w-100 bg-gray-200 rounded-2xl py-5 px-4 shadow-2xl shadow-amber-400 m-auto mt-20">
      <h1 className="text-center text-3xl my-3 font-extrabold ">Todo App</h1>
      <div className="flex justify-around">
        <input
          type="text"
          className="bg-white py-1 px-4 w-[70%] text-xl rounded-md
          "
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter todo item"
        />
        <button
          className="bg-blue-600 px-5 py-1 rounded-xl text-white text-xl font-bold"
          onClick={() => {
            const trimInput = input.trim();
            if (trimInput == 0) {
              alert("Fill input field");
              return;
            }
            if (items.includes(trimInput)) {
              alert("Item already Exist");
              return;
            }
            setItems([...items, input]);
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <li className="flex flex-wrap overflow-hidden justify-between bg-green-500 my-3 py-1 px-2 text-xl rounded-xl">
                <span>{item}</span>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                  className="bg-red-600  px-2 text-md rounded-xl text-white font-bold border-none"
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setItems([]);
        }}
        className="bg-red-600 mt-5 mx-[35%] py-1   px-2 text-md rounded-xl text-white font-bold border-none"
      >
        Clear All
      </button>
    </div>
  );
};

export default Todo;
