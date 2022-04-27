import React from "react";
import '../css/TodoCounter.css'
import { TodoContext } from "../TodoContext";
//Estilos en linea
/* const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
}

function TodoCounter(){
    return (
        <h2 style={estilos}>Actividades resueltas</h2>
    );
} */
function TodoCounter(){
    const {totalTODOS,completedTODOS} = React.useContext(TodoContext)
    return (
        <>
            <div className="container">
                <div className="box">T</div>
                <div className="box">A</div>
                <div className="box">S</div>
                <div className="box">K</div>
            </div>
            <h2 className="TodoCounter">
                Has completado {completedTODOS} de {totalTODOS} tareas
            </h2>
        </>
    );
}
export  {TodoCounter};