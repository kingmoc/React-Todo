import React from 'react';
import './Todo.scss';

const Todo = (props) => {
	// console.log(props)

	let todo = props.todoSearch.length ? props.todoSearch : props.todo;

	return (
		

		todo.map(task => {
			// console.log(task.completed)

			let className = '';

			(task.completed) ? className = "strike" : className = "";


			return ( 
				<li 
				onClick={props.toggle} 
				key={task.id}
				id={task.id}
				className={className}
				>
				{task.task}
				</li>
			)
		})

	)
}

export default Todo; 