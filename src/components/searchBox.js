import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input 
				className='pa3 ba b-green bg-lightest-blue ma2' 
				type='search' 
				placeholder='enter your robot friend name'
				onChange={searchChange}
			/>
		</div>
	);
}


export default SearchBox;