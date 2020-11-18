import React, { Component } from 'react';
import './style.css';
// import API from '../../utils/API';
import users from '../../utils/users.json';
import DataBody from '../DataBody';
import Searchbar from '../Searchbar';

class DataArea extends Component {
	state = {
		users: users,
		filteredUsers: users,
	};

	// componentDidMount() {
	// 	API.getUsers().then((results) => {
	// 		// console.log(results.data.results);
	// 		this.setState({
	// 			users: results.data.results,
	// 		});
	// 	});
	// }

	handleSearchChange = (event) => {
		// console.log(event);
		const searched = event.target.value.toLowerCase().trim();
		// console.log(searched);

		const filtered = this.state.users.filter((user) => {
			return user.name.first.toLowerCase() === searched;
		});

		console.log(filtered);
		this.setState({ filteredUsers: filtered });
	};

	render() {
		return (
			<>
				<div className="container-fluid">
					<Searchbar handleSearchChange={this.handleSearchChange} />

					<table className="table">
						<thead>
							<tr>
								<th scope="col" style={{ width: '5%' }}>
									#
								</th>
								<th scope="col" style={{ width: '10%' }}>
									thumbnail
								</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Email</th>
								<th scope="col">City</th>
								<th scope="col">Registered</th>
							</tr>
						</thead>

						<DataBody filteredUsers={this.state.filteredUsers} />
					</table>
				</div>
			</>
		);
	}
}

export default DataArea;
