import React from 'react';
import './Todo.scss';
import Todo from "./Todo"
import TodoForm from "./TodoForm"

const TodoList = (props) => {
	/*
	console.log(props.todoList)
	let todo = props.todoList.map(todo => todo.task)
	console.log(todo)
	//*/

	return (
		<div>

			<ul>
			<Todo todo={props.todoList}/>
			</ul>

			<TodoForm 
			input={props.input} 
			addToDo={props.addToDo} 
			handleChanges={props.handleChanges}
			/>
		
		</div>
	)
}


export default TodoList
