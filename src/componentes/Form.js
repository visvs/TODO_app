import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const [newTodoValue, setNewValue] = React.useState(''); 
    const {addTodo, setOpenModal} = React.useContext(TodoContext)

    const onWrite = (event)=>{
        setNewValue(event.target.value)
    }
    const onCancel = ()=>{
        setOpenModal(prev => !prev);
    }
    const onSubmitAdd = (event)=>{
        //Evitar que se recargue por defecto con el evento submit
        event.preventDefault();
        if(newTodoValue.length > 0){
            addTodo(newTodoValue)
        }
        setOpenModal(prev => !prev);
    }

    return(
        <form onSubmit={onSubmitAdd}>
            <label>

            </label>
            <textarea
                onChange={onWrite}     
                value={newTodoValue}       
                placeholder="Qué hare hoy?"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                    >Cancelar</button>
                <button
                    type="submit"
                >Añadir</button>
            </div>
        </form>
    )
}
export {TodoForm};