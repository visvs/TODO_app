import React from 'react';
import '../css/createTodoButton.css';

//Importar contexto para utilizar los estados
import { TodoContext } from "../TodoContext"


function CreateTodoButton() {
  //Llamamos los estados que queremos usar(escuchar) desde el contexto
  const {setOpenModal} = React.useContext(TodoContext);
  const onClickButton = ()=>{
    //Abrir el modal con el boton +
    //setOpenModal(true);
    //Abrir y cerrar el modal
    setOpenModal(prev => !prev);
  }
  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };