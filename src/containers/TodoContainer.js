import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form'

import TodoForm from '../components/todos/TodoForm'
import DisplayTodos from '../components/todos/DisplayTodos'
import { createTodo, getTodos } from '../actions/TodoActions'

class TodoContainer extends Component {

    state = {
        switchOn: false,
    }

    // use localstorage  user object to fetch todos on container render
    componentDidMount() {
        if (localStorage.user) {
            this.props.get(localStorage.user)
        }
    }

    handleChange = (event) => {
        this.setState({
            switchOn: !this.state.switchOn
        })
    }

    render() {
        const containerStyle = {
            position: "fixed", 
            width: '48%',
            borderRadius: "25px",
            height: "62%", 
            padding: "1%", 
            left: "1%", 
            bottom: "1%",
            textAlign: "center", 
            backgroundColor: "#a4b3b6",
            overflow: "scroll",
            display: "inline"
        };

        return (
            <div className="todos" style={ containerStyle }>
                <h4>Todo's</h4>
                <Form>
                    <Form.Check
                        onChange={ event => this.handleChange(event)} 
                        type="switch"
                        label={this.state.switchOn ? "Newest First" : "Oldest First"}
                        id="switchEnabled"
                    />
                </Form>
                <TodoForm createTodo={this.props.create} />
                <DisplayTodos todos={this.props.todos} toggleState={this.state.switchOn}/>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create: (todo_data, user_id) => dispatch(createTodo(todo_data, user_id)),
        get: (user_id) => dispatch(getTodos(user_id))
    }
}

const mapStateToProps = (state) => {
    return {todos: state.todo.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
