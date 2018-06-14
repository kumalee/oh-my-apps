import React from 'react';
import Form from 'components/form';
import List from 'components/list';

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
            <React.Fragment>

                <Form onAddTodo={this.onAddTodo} />
                <List todolist={this.state.todolist} />
            </React.Fragment>
        )
    }
};
