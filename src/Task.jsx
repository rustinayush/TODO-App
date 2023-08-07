import React from "react";

const Task = ({ lists, id, handleDelete, handleEdit }) => {
    return (
        <div className="task">
            <h1>{lists}</h1>
            <button onClick={() => handleEdit(id)}>Edit</button>
            <button onClick={() => handleDelete(id)}>X</button>
        </div>
    );
};

export default Task;
