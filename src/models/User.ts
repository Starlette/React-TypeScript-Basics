export interface IUserAuth {
	username: string;
	password: string;
}

// Axios HTTP Example

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Geo {
	lat: string;
	lng: string;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}