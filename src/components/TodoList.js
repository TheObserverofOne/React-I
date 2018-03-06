import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleTodoInput = (event) => {
    this.setState({newTodo: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
    const updateTodo = this.state.todos;
    updateTodo.push(this.state.newTodo);
    this.setState({
      todos: updateTodo,
      newTodo: ''
    });
  }

  removeTodo = (index) => {
    let removeList = this.state.todos;
    removeList.splice(index, 1);
    this.setState({todos: removeList});
  }

  render() {
    return (
      <div>
          {this.state.todos.map((todo, i) => 
            <Todo key={i} index={i} todo={todo} remove={this.removeTodo.bind(this)} />)}
        <form onSubmit={this.addTodo}>
          <input id="test" type="text" onChange={this.handleTodoInput}
            placeholder="Add a new todo" value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}

export default TodoList;