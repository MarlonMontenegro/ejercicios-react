import React from "react";

function ListaUsuarios(props) {
    return (

        <div className="usuario">
            <ul>
                {props.users.map((user, index) => (
                    <div className="container-user">
                        <li key={index}>
                            <div className="user-info">
                                <img src={user.url}/>
                                <h1>{user.name}</h1>
                                <h2>{user.age}</h2>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;