import React, { useState } from "react";
import AddIcon from "../../Icons/addicon.svg";
import todosAdd from "../../Icons/todosadd.svg";
import TodoList from "../Todolist";

const Todos = () => {
  const [todos, setTodos] = useState("");
  const [inputField, setInputField] = useState(false);
  const [alltodo, setAllTodo] = useState([]);
  const handleOpenEnterTodo = () => {
    setInputField(true);
  };

  const handleInput = (e) => {
    setTodos(e.target.value);
  };

  const handleTodoSubmit = () => {
    setAllTodo((alltodo) => [...alltodo, todos]);
    document.getElementById("todos").value = "";
  };
  console.log(alltodo, "alltodoalltodoalltodofrghjikoghj999");
  return (
    <>
      <h1 className="text-center font-extrabold text-amber-600 text-5xl mt-6">
        Todo's
      </h1>
      <div className="border mx-32 text-center mt-8 min-h-fit bg-slate-100">
        {inputField && (
          <>
            <div className="flex mx-16 mt-3 px-64">
              <input
                type="text"
                name="todos"
                id="todos"
                className="block w-full pl-5 pr-12 lg:text-lg  rounded-md border-orange-700 p-1 mr-3"
                placeholder="Enter todo's"
                onChange={(e) => handleInput(e)}
              />
              <div disabled={todos? false : true}>
                <img
                  src={todosAdd}
                  height="40px"
                  width="40px"
                  className="cursor-pointer"
                  onClick={handleTodoSubmit}
                />
              </div>
            </div>
            {alltodo && alltodo.length ? (
              <div className="flex mx-16 mt-3 px-64">
                <TodoList alltodo={alltodo} />
              </div>
            ) : null}
            <div className="flex mx-64 justify-between mt-4">
              <div>
                <span className="inline-flex bg-pink-600 text-white rounded-full h-6 px-4 justify-center items-center  cursor-pointer">
                  All
                </span>
              </div>
              <div>
                {" "}
                <span className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center text-center cursor-pointer">
                  Completed
                </span>
              </div>
              <div>
                <span className="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center cursor-pointer">
                  Incomplete
                </span>
              </div>
            </div>
          </>
        )}
        <div className="flex justify-end p-4">
          <img
            src={AddIcon}
            height="50px"
            width="50px"
            className="cursor-pointer"
            onClick={handleOpenEnterTodo}
          />
        </div>
      </div>
    </>
  );
};

export default Todos;
