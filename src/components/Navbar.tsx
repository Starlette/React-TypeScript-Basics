import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export interface IProps {}
export interface IState {}

let NavBar: React.FC<IProps> = () => {
 	return (
    	<>
			<Navbar bg="dark" variant="dark" className="mb-4">
				<Container>
					<Navbar.Brand href="#home">
						<img
						alt=""
						src={ logo }
						width="30"
						height="30"
						className="d-inline-block align-top"
						/>{' '}
					React + TypeScript
					</Navbar.Brand>
					<Nav className="me-auto">
						<Link className="nav-link" to='/'>Home</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
  	)
}

export default NavBar;