import React from 'react';
import './App.scss';

import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todo: [{
        task: "Walk the Dog",
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }]
    }
  }

  addToList = e => {
    e.preventDefault();
    // immutability in react/javascript
    const newTask = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask],
      input: " "
    });
    console.log(this.state.input)
  };
 

  handleChanges = e => {

    this.setState({
      [e.target.name]: e.target.value
    });

  }

  

  render() {
    return (
      <div className="app">
        <TodoList 
        todoList={this.state.todo} 
        input={this.state.input} 
        addToDo={this.addToList}
        handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
