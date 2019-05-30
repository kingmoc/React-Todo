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
				<Todo 
					todoSearch={props.todoSearch} 
					todo={props.todoList} 
					toggle={props.toggle}
					className={props.className}
				/>
			</ul>

			<TodoForm 
			input={props.input} 
			addToDo={props.addToDo} 
			handleChanges={props.handleChanges}
			remove = {props.remove}
			/>
		
		</div>
	)
}


export default TodoList
