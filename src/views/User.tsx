import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { User } from "../models/User";
import { UserService } from "../services/UserService";

export interface IProps {}
export interface IState {
	loading: boolean;
  	user: User;
	errorMessage: string;
}
export interface URLParams {
	id: string;
}

let UserDetails: React.FC<IProps> = () => {
	let { id } =  useParams<URLParams | any>();
	let [ state, setState ] = useState<IState>({
		loading: false,
		user: {} as User,
		errorMessage: ''
	});

	useEffect(() => {
		setState({
			...state,
			loading: true
		})

		UserService.getUser( id ).then( response => {
			setState({
				...state,
				loading: false,
				user: response.data
			})
		}).catch( error => {
			setState({
				...state,
				loading: false,
				errorMessage: error.message
			})
		})
	});

	let { loading, user, errorMessage } = state;

 	return (
    	<>
			<h1>User Details</h1>
			{
				user && (
					<ListGroup>
						<ListGroup.Item>Name: { user.name }</ListGroup.Item>
						<ListGroup.Item>Email: { user.email }</ListGroup.Item>
						<ListGroup.Item>Company: { user.company.name }</ListGroup.Item>
					</ListGroup>
				)
			}
    	</>
  	)
}

export default UserDetails;