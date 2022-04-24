import React from "react";
import { TodoContext } from "../TodoContext";
import '../css/modal.css'
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
        <div className="form-content">
            <form onSubmit={onSubmitAdd}>
            <label>
                Crea una nueva tarea
            </label>
            <textarea
                onChange={onWrite}     
                value={newTodoValue}       
                placeholder="Qué hare hoy?"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    >Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >Añadir</button>
            </div>
        </form>
        </div>
    )
}
export {TodoForm};