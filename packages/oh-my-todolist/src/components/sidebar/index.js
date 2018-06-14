import React from 'react';
import Styles from './index.css';
import Menu from 'components/menu';

export default (props) => {
    return (
        <ul className={Styles.list}>
        {props.todolist.map(todo => <Menu key={todo}>Todo {todo}</Menu>)}
        </ul>
    );
}