import React from 'react';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        };
        this._onUpdateInput = this._onUpdateInput.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
    }

    _onUpdateInput(evt) {
        this.setState({
            todo: evt.target.value
        });
    }

    _onKeyUp(evt){
        if (evt.charCode === 13 || evt.keyCode === 13) {
            this.props.onAddTodo(this.state.todo);
        }
    }

    render() {
        return (
            <div className="form">
                <input
                    type="text"
                    onChange={this._onUpdateInput}
                    onKeyUp={this._onKeyUp}
                    value={this.state.todo}
                />
            </div>
        )
    }
};
