import React, { Component } from 'react';
import Todos from './todos'
import AddForm from './addForm'


class App extends Component {
  state = {
    todoslist: [
      { id: 1, content: "Buy some Milk" },
      { id: 2, content: "Play Zelda BOTW" }

    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let newtodo = [todo, ...this.state.todoslist]
    this.setState({
      todoslist: newtodo
    })
  }

  deleteTodo = (id) => {
    let newList = this.state.todoslist.filter(item => {
      return id !== item.id
    })
    this.setState({
      todoslist: newList
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddForm addTodo={this.addTodo} />
        <Todos todos={this.state.todoslist} deleteTodo={this.deleteTodo} />
      </div>
    )
  }

}


export default App;