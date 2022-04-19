import React from "react";
import '../css/TodoSearch.css'
function TodoSearch(){
    const [searchWord, setState] = React.useState('');

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
        placeholder="Task" />,
        <p>
            {searchWord}
        </p>
    ];
}

export {TodoSearch};