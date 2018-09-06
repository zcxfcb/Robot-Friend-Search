import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input 
				className='pa3 ba b-green bg-lightest-blue ma2 w-25' 
				type='search' 
				placeholder="enter your robot friend's name"
				onChange={searchChange}
			/>
		</div>
	);
}


export default SearchBox;