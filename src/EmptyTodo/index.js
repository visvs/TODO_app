import React from "react";

function EmptyTodo({error}){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50
        }}>
            Vamos!! Crea tu primer TODO
        </div>
    )
}
export {EmptyTodo} 