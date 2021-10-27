import React from 'react';
import './TodoItem.css';
import { MdDoneAll } from 'react-icons/md';
import { BsDashCircle } from 'react-icons/bs';

function TodoItem(props) {
  return (
    <li className="TodoItem"> 
      <MdDoneAll 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BsDashCircle 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
