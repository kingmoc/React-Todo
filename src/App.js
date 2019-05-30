import React from 'react';
import './App.scss';

import TodoList from "./components/TodoComponents/TodoList"
import SearchBar from "./components/SearchBar"

class App extends React.Component {

  constructor() {
      super();

      this.state = {

        input: '',
        searchInput: '',
        todoSearch: [],
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

     if(this.state.input === '') {
       return alert("Please add Task!")
     }
    
      const newTask = {
        task: this.state.input,
        id: Date.now(),
        completed: false
      };

      this.setState({
        todo: [...this.state.todo, newTask],
        input: '',
      });

      // console.log(this.state.input)      

  };

  toggle = e => {

    let indexValue = this.state.todo.findIndex((element) => parseInt(element.id) === parseInt(e.target.id))
    // console.log('indexValue',indexValue)

    let copyTodo = [...this.state.todo];
    
    (copyTodo[indexValue].completed) ? copyTodo[indexValue].completed = false : copyTodo[indexValue].completed = true;


    this.setState({
      
      todo: copyTodo
      
    })

  }

  removeComplete = e => {
    
    let newList = this.state.todo.filter((task) => task.completed === false)

    this.setState({
      
      todo: newList
      
    })

  }
 

  handleChanges = e => {
    console.log(e.target.name)

    this.setState({
      [e.target.name]: e.target.value
    });

  }

  search = e => {
    console.log(e.target.value)
    console.log(this.state.todo[0].task.charAt(0))

    let searchList = this.state.todo.filter(task => {
      return task.task.charAt(0).toUpperCase() === e.target.value.toUpperCase()
    })

    // console.log(searchList)

    this.setState({
      todoSearch: searchList
    });

  }

  

  render() {


      return (
        <div className="app">

          <SearchBar 
          search={this.search}
          input={this.state.inputSearch}  
          />

          <TodoList 
          todoSearch={this.state.todoSearch}
          todoList={this.state.todo} 
          className={this.state.toggle}
          input={this.state.input} 
          addToDo={this.addToList}
          handleChanges={this.handleChanges}
          toggle={this.toggle}
          remove={this.removeComplete}
          />
        </div>
      );


  }
}

export default App;
