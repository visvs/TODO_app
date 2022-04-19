import react from "react";
import { TodoCounter } from "./componentes/TodoCounter";
import { TodoSearch } from "./componentes/TodoSearch.js";
import { TodoList } from "./componentes/TodoList.js";
import { TodoItem } from "./componentes/TodoItem.js";
import { CreateTodoButton } from "./componentes/CreateTodoButton.js";
import React from "react";
//import './App.css';
const defaultTodos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
];

function App() {
  const [todos, setStateTodos] = React.useState(defaultTodos);

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
  //

  return (
   <react.Fragment>
      <TodoCounter 
      total={totalTODOS}
      completed={completedTODOS}
      />    
      <TodoSearch 
        searchWord = {searchWord}
        setState= {setState}
      />
      <TodoList>
        {searchTODOS.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed = {todo.completed}
        />))}
      </TodoList>
      <CreateTodoButton />      
   </react.Fragment>
  );
}

export default App;

