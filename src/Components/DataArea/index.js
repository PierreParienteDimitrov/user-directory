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
		order: 'ascend',
	};

	// componentDidMount() {
	// 	API.getUsers().then((results) => {
	// 		// console.log(results.data.results);
	// 		this.setState({
	// 			users: results.data.results,
	// 		});
	// 	});
	// }

	// SEARCH
	handleSearchChange = (event) => {
		// console.log(event);
		const searched = event.target.value.toLowerCase().trim();
		// console.log(searched);

		const filtered = this.state.users.filter((user) => {
			return user.name.first.toLowerCase().match(searched);
		});

		console.log(filtered);
		this.setState({ filteredUsers: filtered });
	};

	// FILTER
	handleFilterChange = () => {
		const toSearch = [...this.state.users];

		if (this.state.order === 'ascend') {
			this.setState({ order: 'descend' });
		} else {
			this.setState({ order: 'ascend' });
		}

		const sorted = toSearch.sort((a, b) => {
			const nameA = a.name.first.toLocaleLowerCase();
			const nameB = b.name.first.toLocaleLowerCase();

			if (nameA < nameB) {
				if (this.state.order === 'ascend') {
					return 1;
				} else {
					return -1;
				}
			}
			if (nameA > nameB) {
				if (this.state.order === 'ascend') {
					return -1;
				} else {
					return 1;
				}
			}
			return 0;
		});

		this.setState({ filteredUsers: sorted });
	};

	chevronHandler = () => {
		if (this.state.order === 'ascend') {
			return <i class="fas fa-chevron-down"></i>;
		} else {
			return <i class="fas fa-chevron-up"></i>;
		}
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
								<th scope="col" onClick={this.handleFilterChange}>
									First Name {this.chevronHandler()}
								</th>
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
