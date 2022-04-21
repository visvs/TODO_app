import React from "react";

import { TodoCounter } from "./componentes/TodoCounter";
import { TodoSearch } from "./componentes/TodoSearch.js";
import { TodoList } from "./componentes/TodoList.js";
import { TodoItem } from "./componentes/TodoItem.js";
import { CreateTodoButton } from "./componentes/CreateTodoButton.js";
import {TodoContext} from './TodoContext'

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
        <TodoContext.Consumer>
          
          {({error, 
            loading , 
            searchTODOS, 
            completeTodo, 
            deleteTodo, 
            unCompleteTodo
          })=>(
            <TodoList>
            {error && <p>Error encontrado :C</p>}
            {loading && <p>Cargando ...</p>}
            {(!loading && !searchTODOS.length) && <p>Crea tu primer TODO!</p>}
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
          )}
        </TodoContext.Consumer>
        <CreateTodoButton />      
     </React.Fragment>
    )
}
export {AppUI}