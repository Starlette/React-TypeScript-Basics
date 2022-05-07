import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { User } from "../models/User";
import { UserService } from "../services/UserService";
import { Link } from 'react-router-dom';

export interface IProps {}
export interface IState {
	loading: boolean;
  	users: User[];
	errorMessage: string;
}

let UserList: React.FC<IProps> = () => {
  	let [ state, setState ] = useState<IState>({
		loading: false,
		users: [] as User[],
		errorMessage: ''
	});

	useEffect(() => {
		setState({
			...state,
			loading: true
		});

		UserService.getAllUsers().then((response) => {
			setState({
				...state,
				loading: false,
				users: response.data
			});
		}).catch((error) => {
			setState({
				...state,
				loading: false,
				errorMessage: error.message
			})
		});
	});

	let { loading, users, errorMessage } = state;

 	 return (
		<>
			<h1>Users</h1>
			<Table striped bordered>
				<thead>
					<tr>
						<th>Uid</th>
						<th>Name</th>
						<th>Email</th>
						<th>Company</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{
						users.length > 0 && 
						users.map( user => {
							return (
								<tr>
									<td>{ user.id }</td>
									<td>
										<Link to={`/user/${user.id}`} className="text-decoration-none text-success">
											{ user.name }
										</Link>
									</td>
									<td>{ user.email }</td>
									<td>{ user.company.name }</td>
									<td>{ user.address.city }</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
		</>
 	 )
}

export default UserList;