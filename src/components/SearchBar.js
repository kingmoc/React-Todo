import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {


	return (
		<input
		type="text" 
		name="searchInput"
		placeholder="Search" 
		value={props.input}
		onChange={props.search}
		/>
	);
}


export default SearchBar