import React from 'react';
import './style.css';

function Searchbar(props) {
	return (
		<div>
			<form className="form-inline">
				<input
					className="form-control"
					type="search"
					placeholder="Search First Name"
					arial-label="Search"
					onChange={(event) => props.handleSearchChange(event)}
				/>
			</form>
		</div>
	);
}

export default Searchbar;
