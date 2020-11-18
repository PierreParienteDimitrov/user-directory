import React from 'react';
import './style.css';

function DataBody({ filteredUsers }) {
	return (
		<tbody>
			{filteredUsers.map((user, index) => {
				return (
					<tr key={user.login.uuid}>
						<th scope="row">{index + 1}</th>
						<td>
							<img src={user.picture.thumbnail} alt="" />
						</td>
						<td>{user.name.first}</td>
						<td>{user.name.last}</td>
						<td>{user.email}</td>
						<td>{user.location.city}</td>
						<td>{user.registered.date}</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default DataBody;
