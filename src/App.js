import React from "react";
import {AppUI} from './AppUI'
import {TodoProvider} from './TodoContext'
//import './App.css';
/* const defaultTodos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
]; */
function App() {  
//Manejo de efectos
//Si se envia un array vacio se ejecuta unicamente en el primer render
/* React.useEffect(()=>{
  console.log('Llamada al useEffect')
}, [totalTODOS]) */
  return (
    <TodoProvider>
      {/**
       * En el diseño del componente TodoProvider se llama a las props.children entonces todos los componentes que reciba TodoProvider tendra acceso a los valores que se definen en este componente, es decir las props que se tenian antes
       */}
      <AppUI 
     
     />
    </TodoProvider>
  );
}

export default App;

