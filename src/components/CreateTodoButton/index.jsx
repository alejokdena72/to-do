import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  return (
    <button 
      onClick={onClickButton}
      className="CreateTodoButton">
      +
      </button>
  );
}

export { CreateTodoButton };
