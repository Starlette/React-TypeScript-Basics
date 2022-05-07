import axios, { AxiosPromise } from "axios";
import { User } from "../models/User";

export class UserService {
	private static serverUrl: string = 'https://jsonplaceholder.typicode.com';

	public static getAllUsers(): AxiosPromise<User[]> {
		return axios.get<User[]>( `${this.serverUrl}/users` );
  	}

	public static getUser( userId: string | undefined ): AxiosPromise<User> {
		return axios.get<User>( `${this.serverUrl}/users/${userId}` );
	}
}