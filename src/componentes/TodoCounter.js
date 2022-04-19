import React from "react";
import '../css/TodoCounter.css'
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
function TodoCounter({total, completed}){
    return (
        <h2 className="TodoCounter">
            Has completado {completed} de {total} tareas
        </h2>
    );
}
export  {TodoCounter};