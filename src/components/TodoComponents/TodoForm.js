import React from 'react';
import './Todo.scss';

const TodoForm = (props) => {
	return (
		<div className="form">

			<input 
			onChange = {props.handleChanges}
			value={props.input}
			name="input"
			type="text" 
			placeholder="...todo" 
			/>

			<button onClick={props.addToDo}>Add Todo</button>
			<button onClick={props.remove}>Clear Comleted</button>
		</div>
	)
}

export default TodoForm