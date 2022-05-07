import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { IUserAuth } from "../models/User";

export interface IProps {}
export interface IState {
	user: IUserAuth;
}

let LoginForm: React.FC<IProps> = () => {

	let [ state, setState ] = useState<IState>({
		user: {
			username: '',
			password: ''
		}
	});

	let UpdateInput = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
		setState({
			user: {
				...state.user,
				[ event.target.name ]: event.target.value
			}
		});
	};

	let Login = ( event: React.FormEvent<HTMLFormElement> ) => {
		event.preventDefault();

		console.log( JSON.stringify( state.user ) );
	};

 	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>Login Form</Card.Title>
					<Form onSubmit={Login}>
						<Form.Group className="mb-3" controlId="username">
							<Form.Label>Username</Form.Label>
							<Form.Control 
								onChange={UpdateInput} 
								value={state.user.username} 
								name="username" 
								placeholder="Username / email"
								 type="text" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control 
								onChange={UpdateInput} 
								value={state.user.password} 
								name="password" 
								placeholder="Password" 
								type="password" required />
						</Form.Group>
						<Button type="submit" variant="primary">Login</Button>
					</Form>
				</Card.Body>
			</Card>
		</>
 	)
}

export default LoginForm;