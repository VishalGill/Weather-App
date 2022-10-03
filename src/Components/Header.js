import React from 'react';

function Header({ citySearch, handleSubmit, handleChange }) {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					value={citySearch}
					placeholder='Enter City Name'
				/>{' '}
				<button type='submit' className='searchButton'>
					Search
				</button>
			</form>
		</div>
	);
}

export default Header;
