import React from "react";
import '../css/TodoSearch.css'
import { TodoContext } from "../TodoContext";
//Recibe estado compartido
function TodoSearch(){
    const {searchWord, setState} = React.useContext(TodoContext)
    //Estado en componente Search
    //const [searchWord, setState] = React.useState('');

    //Eventos
    const onSearchValueChange = (event) =>{
        //console.log(event.target.value);
        setState(event.target.value);
    }

    return[
        <input 
        className="TodoSearch" 
        value={searchWord}
        onChange={onSearchValueChange}
        placeholder="Task" />
    ];
}

export {TodoSearch};