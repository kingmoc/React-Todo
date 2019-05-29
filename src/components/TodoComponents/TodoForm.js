import React from 'react';
import './Todo.scss';

const TodoForm = (props) => {
	return (
		<div className="form">

			<input 
			input = {props.input}
			onChange = {props.handleChanges}
			name="input"
			type="text" 
			placeholder="...todo" 
			/>

			<button onClick= {props.addToDo}>Add Todo</button>
			<button>Clear Comleted</button>
		</div>
	)
}

export default TodoForm