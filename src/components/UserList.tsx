import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { IUser } from "../models/User";
import { UserService } from "../services/UserService";

export interface IProps {}
export interface IState {
  	users: IUser[];
}

let UserList: React.FC<IProps> = () => {
  	let [ state, setState ] = useState<IState>({
		users: UserService.getAllUsers()
	});

  return (
    <>
      	<Table striped bordered>
			<tbody>
				{
					state.users.length > 0 && 
					state.users.map( user => {
						return (
							<tr>
								<td>{ user.uid }</td>
								<td>{ user.name }</td>
								<td>{ user.age }</td>
								<td>{ user.designation }</td>
								<td>{ user.company }</td>
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