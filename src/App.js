import react from "react";
import { TodoCounter } from "./componentes/TodoCounter";
import { TodoSearch } from "./componentes/TodoSearch.js";
import { TodoList } from "./componentes/TodoList.js";
import { TodoItem } from "./componentes/TodoItem.js";
import { CreateTodoButton } from "./componentes/CreateTodoButton.js";
//import './App.css';
const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
];
function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem 
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

