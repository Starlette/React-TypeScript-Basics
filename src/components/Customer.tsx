import React from "react";
import { ListGroup } from "react-bootstrap";

export interface IProps {
    name: string;
    age: number;
    title?: string; // optional
}

let Customer: React.FC<IProps> = ({ name, age, title }) => {
    return (
        <>
            <h2>Functional Component</h2>
            <ListGroup>
                <ListGroup.Item>Name: {name}</ListGroup.Item>
                <ListGroup.Item>Age: {age}</ListGroup.Item>
                {title && (
                    <ListGroup.Item>Title: {title}</ListGroup.Item>
                )}
            </ListGroup>
        </>
    )
}

export default Customer;