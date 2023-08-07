import "./styles.css";
import React, { useState } from "react";
import Task from "./Task";
export default function App() {
  const [task, setTask] = useState("");
  const [listArray, setListArray] = useState([]);
  const [togglesubmit, setTogglesubmit] = useState(true);
  const [editId, setEditId] = useState("");
  const fetchData = (event) => {
    setTask(event.target.value);
  };
  const handleInput = () => {
    if (task === "") {
      return;
    }
    const newTodolist = [...listArray, task];
    setTask("");
    setListArray(newTodolist);
  };
  const handleDelete = (id) => {
    const newArray = listArray.filter((name, index) => {
      return index !== id;
    });
    console.log(newArray);
    setListArray(newArray);
  };
  //making a complete task function
  // const completedTask = (id) => {
  //   const newArray = listArray.map((name, index) => {
  //     if (id === index) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // };
  //edit a part of task
  const handleEdit = (id) => {
    const element = listArray[id];
    console.log(id, element);
    setTask(element);
    setEditId(id);
    setTogglesubmit(false);
  };
  const handleUpdate = () => {
    listArray[editId] = task;
    setTask("");
    setTogglesubmit(true);
  };
  return (
    <div className="App">
      <h2>TODO-LIST</h2>
      <div className="addTask">
        <input value={task} onChange={fetchData} />
        {togglesubmit ? (
          <button onClick={handleInput}>Add Task</button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}
      </div>
      <div className="list">
        {listArray.map((lists, id) => {
          return (
            <Task
              lists={lists}
              id={id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
}
