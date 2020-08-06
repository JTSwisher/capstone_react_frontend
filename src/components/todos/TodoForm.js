import React, { Component } from 'react';

class TodoForm extends Component {

    state = {
        title: '',
        body: '',
        user_id: this.props.user,
        complete: false
    }

    handleOnChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createTodo(this.state, this.props.user)
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={ (event) => this.handleOnSubmit(event)}>
                    <label htmlFor="name">Title</label>
                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor="name">Body</label>
                    <input
                        name="body"
                        value={this.state.body}
                        onChange={this.handleOnChange}
                    /><br />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;