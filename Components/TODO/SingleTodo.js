import React, { useState } from 'react';
import todoStyle from './TodoComponent.module.css';
import { AiFillDelete } from "react-icons/ai";
import { deleteTodo, updateTODO } from './TodoActions';

const SingleTodo = ({ id, data }) => {

    const { Completed, TODO, Description } = data;

    const [isCompleted, setIsCompleted] = useState(Completed);
    const [removeTodo, setRemoveTodo] = useState(false);

    const handleCheckbox = () => {
        updateTODO(id, {...data, Completed: !isCompleted})
        setIsCompleted( !isCompleted );
    }

    const handleDelete = () => {
        deleteTodo(id);
        setRemoveTodo(true);
    }

    return (
        <div>
            {
                !removeTodo && 
                <div className={todoStyle.todoCard}>
                    <div>
                        <input type="checkbox" name="Completed" onChange={handleCheckbox} checked={isCompleted} />
                        <h6 className={`mx-3 my-2 ${ isCompleted ? todoStyle.lineThrough : ''}`}>{TODO}</h6>
                    </div>
                    <p className={ isCompleted ? todoStyle.lineThrough : ''}>{Description}</p>
                    <div className={todoStyle.iconStyle}>
                        <AiFillDelete onClick={handleDelete} className={todoStyle.icon} />
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleTodo;