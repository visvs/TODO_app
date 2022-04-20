import React from "react";
import {AppUI} from './AppUI'
//import './App.css';
/* const defaultTodos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
]; */

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_v1');

  let parseTODOS ;
  if(!localStorageTodos){
    localStorage.setItem('TODOS_v1', JSON.stringify([]))
    parseTODOS = []
  }
  else{
    parseTODOS = JSON.parse(localStorageTodos)
  }

  const [todos, setStateTodos] = React.useState(parseTODOS);

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

const setTodos = (newTodos) =>{
    const todosString = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_v1', todosString);
    setStateTodos(newTodos);
}
/**
 * Actualiza el estado de completado de x tarea a true (done)
 * @param {*} todoText 
 */
  const completeTodo = (todoText)=>{

    const index = todos.findIndex(todo => todo.text === todoText);
    const newTodos = [...todos];
    newTodos[index].completed = true;
    //setStateTodos(newTodos);
    setTodos(newTodos);

  };
  const unCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //setStateTodos(newTodos);
    setTodos(newTodos);
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
    setTodos(newTodos);
  }

  return (
    <AppUI 
    totalTODOS = {totalTODOS}
    completedTODOS =  {completedTODOS}
    searchWord = {searchWord}
    setState = {setState}
    searchTODOS = {searchTODOS}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    unCompleteTodo = {unCompleteTodo}   
    />
  );
}

export default App;

