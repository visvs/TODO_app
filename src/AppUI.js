import React from "react";

import { TodoCounter } from "./componentes/TodoCounter";
import { TodoSearch } from "./componentes/TodoSearch.js";
import { TodoList } from "./componentes/TodoList.js";
import { TodoItem } from "./componentes/TodoItem.js";
import { CreateTodoButton } from "./componentes/CreateTodoButton.js";
import {TodoContext} from './TodoContext'
import {Modal} from './componentes/Modal'
import { TodoForm } from "./componentes/Form";
//Componentes loading skeleton
import {TodoError} from './TodoError';
import {EmptyTodo} from './EmptyTodo';
import {TodoLoading} from './TodoLoading/TodoLoading';

function AppUI(/* {
    totalTODOS,
    error,
    loading,
    completedTODOS,
    searchWord,
    setState,
    searchTODOS,
    completeTodo,
    deleteTodo,
    unCompleteTodo,
} */){
  const {error, 
    loading , 
    searchTODOS, 
    completeTodo, 
    deleteTodo, 
    unCompleteTodo,
    openModal,    
  } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoCounter 
       /*  total={totalTODOS}
        completed={completedTODOS} */
        />    
        <TodoSearch 
          /* searchWord = {searchWord}
          setState= {setState} */
        />
      {/*   <TodoContext.Consumer>
          
          {({error, 
            loading , 
            searchTODOS, 
            completeTodo, 
            deleteTodo, 
            unCompleteTodo
          })=>( */}
            <TodoList>
            {error && <TodoError />}
            {loading && <TodoLoading />
            /* new Array(4).fill().map((item, index)=>(
              <TodoLoading key={index} />
            )) */
            } 
            {(!loading && !searchTODOS.length) && <EmptyTodo/>}

            {searchTODOS.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed = {todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
            onUnComplete={()=>unCompleteTodo(todo.text)}
            />))}
          </TodoList>
         {/*  )}
        </TodoContext.Consumer> */}
        {openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>  
        )}
        <CreateTodoButton 
        />      
     </React.Fragment>
    )
}
export {AppUI}