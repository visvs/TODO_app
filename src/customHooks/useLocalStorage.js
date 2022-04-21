import React from "react";
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
  export {useLocalStorage}