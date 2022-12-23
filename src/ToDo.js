import React, { useRef, useState } from "react";
import "./App.css";
import "./index.css";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const mainInput = useRef(null);

  function addList(e) {
    e.preventDefault();
    const num = Math.random() * 100;

    setList((prev) => [
      ...prev,
      {
        id: num.toFixed(3),
        name: name,
      },
    ]);
    mainInput.current.value = "";
  }

  function deleteItem(item) {
    setList(list.filter((res) => res.id != item));
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="flex mt-4 ">
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              className="p-2 border-green-400 border-2 rounded-lg	"
              type="text"
              placeholder="Enter Something"
              ref={mainInput}
            />
            <button
              onClick={addList}
              className="ml-2 bg-blue-700 p-2 rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </div>

        <div>
          <ul className="flex flex-col mt-4">
            {list.map((res, index) => (
              <div key={res.id} className="flex justify-end">
                <li className="m-2">
                  {index + 1}. {res.name}
                  <span className="ml-2">
                    <button
                      onClick={(e) => {
                        deleteItem(res.id);
                      }}
                      className="bg-red-600 hover:bg-red-500 rounded-lg text-white p-2"
                    >
                      Delete
                    </button>
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
