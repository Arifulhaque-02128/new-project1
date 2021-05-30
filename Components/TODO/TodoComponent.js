import React from 'react';
import todoStyle from './TodoComponent.module.css'
import { connect } from 'react-redux';
import SingleTodo from './SingleTodo';

const TodoComponent = ({ todos }) => {

    return (
        <div className={todoStyle.todoContainer}>
            <div>
                <h4 className="text-center text-dark my-4">TODO</h4>
                {
                    todos.map(({id, data}) => (
                        <SingleTodo key={id} id={id} data={data} />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}


export default connect(mapStateToProps)(TodoComponent);