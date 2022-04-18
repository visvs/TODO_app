import React from 'react';
import '../css/TodoItem.css';
import { BsTrash , BsCheckSquareFill, BsCheckSquare} from "react-icons/bs";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check-none'}`}>
      <BsCheckSquare />
      </span>
      <span className={`Icon Icon-check Icon-check-sleep ${props.completed && 'Icon-check--active'}`}>
      <BsCheckSquareFill />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
      <BsTrash />

      </span>
    </li>
  );
}

export { TodoItem };