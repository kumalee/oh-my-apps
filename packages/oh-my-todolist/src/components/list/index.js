import React from 'react';

export default (props) => {
    return (
        <ul>
        {props.todolist.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
    );
}