import React from "react";


function ListaTareas(props) {
    return (
        <div className="tarea">
            <ol>
                {props.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ol>
        </div>
    );
}
export default ListaTareas;