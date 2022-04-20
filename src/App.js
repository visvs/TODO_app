import React from "react";
import {AppUI} from './AppUI'
//import './App.css';
/* const defaultTodos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
]; */
//custom hook
function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setStateItem] = React.useState(initialValue);

  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedTODOS;
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedTODOS = initialValue
        }
        else{
          parsedTODOS = JSON.parse(localStorageItem)
        }
        setStateItem(parsedTODOS);
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  })
  const saveTODOS = (newTodos) =>{
    try {        
        const todosString = JSON.stringify(newTodos);
        localStorage.setItem(itemName, todosString);
        setStateItem(newTodos);
    } 
    catch (error) {
      setError(error)
    }
  }
  return {
    item,
    saveTODOS,
    loading,
    error
  }
}

function App() {  
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

//Manejo de efectos
//Si se envia un array vacio se ejecuta unicamente en el primer render
/* React.useEffect(()=>{
  console.log('Llamada al useEffect')
}, [totalTODOS]) */
  return (
    <AppUI 
    error={error}
    loading={loading}
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

