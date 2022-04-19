import React from "react";
import '../css/TodoSearch.css'
//Recibe estado compartido
function TodoSearch({searchWord, setState}){
    //Estado en componente Search
    //const [searchWord, setState] = React.useState('');

    //Eventos
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
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