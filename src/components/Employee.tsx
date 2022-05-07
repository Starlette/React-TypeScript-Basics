import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

export interface IProps {}
export interface IState {
    name: string;
    age: number;
    title: string;
}

let Employee: React.FC<IProps> = () => {
    let [ state, setState ] = useState<IState>({
        name: 'Chantelle Bradley',
        age: 30,
        title: 'Software Engineer'
    });

    let { name, age, title } = state;

    return (
        <>
            <h2>Function with States</h2>
            <ListGroup>
                <ListGroup.Item>Name: { name }</ListGroup.Item>
                <ListGroup.Item>Age: { age }</ListGroup.Item>
                <ListGroup.Item>Title: { title }</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default Employee;