import { IUser } from "../models/User";

export class UserService {
	private static users: IUser[] = [{
		uid: '001',
		name: 'Chantelle Bradley',
		age: 30,
		designation: 'Software Engineer',
		company: 'Starlette'
	}, {
		uid: '002',
		name: 'John Doe',
		age: 32,
		designation: 'Assistant',
		company: 'Google'
	}, {
		uid: '003',
		name: 'Jane Doe',
		age: 55,
		designation: 'CEO',
		company: 'LinkedIn'
	}];

	public static getAllUsers(): IUser[] {
		return this.users;
  	}
}