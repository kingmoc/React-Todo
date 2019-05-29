import React from 'react';
import './Todo.scss';

const Todo = (props) => {
	console.log(props)
	console.log(props.todo)


	return (
		props.todo.map(task => {
			return <li key={task.id}>{task.task}</li>
		})

	)
}

export default Todo; 