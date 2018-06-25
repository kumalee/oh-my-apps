import React from 'react';
import styled from 'styled-components';
import Form from 'components/form';
import Sidebar from 'components/sidebar';
import Styles from './index.css';

const Title = styled.h1`
    font-size: 1.5em;
    color: #ff0000;
    text-align: center;
`;

export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todolist: ['1','2','3','4','5','6']
        };
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onAddTodo(newTodo){
        const todolist = [...this.state.todolist];
        if (!todolist.includes(newTodo)){
            todolist.push(newTodo);
            this.setState({
                todolist
            });
        }
    }

    render() {
        return (
            <div className={Styles.appContent}>
                <Title>Hello Styled Components!</Title>
                <Form onAddTodo={this.onAddTodo} />
                <Sidebar todolist={this.state.todolist} />
            </div>
        )
    }
};
