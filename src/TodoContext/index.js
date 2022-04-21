import React from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
//Contextos para compartir estados (Providers)
const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item : todos,
        saveTODOS,
        loading,
        error
      }= useLocalStorage('TODOS_v1', [])
      const [searchWord, setState] = React.useState('');
      const completedTODOS = todos.filter(elem => elem.completed).length;
      const totalTODOS = todos.length;
    
      let searchTODOS = [];
    
      if(!searchWord.length >= 1){
        searchTODOS = todos;
      }
      else{
        searchTODOS = todos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
          const searchText = searchWord.toLowerCase();
          return todoText.includes(searchText
          )
      })
      }
    /**
     * Guardar /actualizar todos en local stogare con los todos que recibe
     * @param {*} newTodos 
     */
    
    /**
     * Actualiza el estado de completado de x tarea a true (done)
     * @param {*} todoText 
     */
      const completeTodo = (todoText)=>{
    
        const index = todos.findIndex(todo => todo.text === todoText);
        const newTodos = [...todos];
        newTodos[index].completed = true;
        //setStateTodos(newTodos);
        saveTODOS(newTodos);
    
      };
      const unCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        //setStateTodos(newTodos);
        saveTODOS(newTodos);
      }  
    /**
     * Elimina el TODO especificado
     * @param {*} todoText 
     */
      const deleteTodo = (todoText)=>{    
        const index = todos.findIndex(todo => todo.text === todoText);
        const newTodos = [...todos];
        //Sacar el todo que se desea eliminar
        newTodos.splice(index,1);
        //setStateTodos(newTodos);
        saveTODOS(newTodos);
      }
    

    return(
        <TodoContext.Provider value={{  
            //Valores a compartir
            error,
            loading,
            totalTODOS, 
            completedTODOS, 
            searchWord, 
            setState ,
            searchTODOS, 
            completeTodo, 
            deleteTodo, 
            unCompleteTodo,   
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}