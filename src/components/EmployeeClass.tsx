import React from "react";
import { ListGroup } from "react-bootstrap";

export interface IProps {}
export interface IState {
    name: string;
    age: number;
    title?: string; // optional
}

export class EmployeeClass extends React.Component<IProps, IState> { 
    constructor(props: IProps) {
        super(props);

        this.state = {
            name: 'Chantelle Bradley',
            age: 30
        } as IState;
    }

    render() {
        let { name, age, title } = this.state;

        return (
            <>
                <h2>Class States</h2>
                <ListGroup>
                    <ListGroup.Item>Name: { name }</ListGroup.Item>
                    <ListGroup.Item>Age: { age }</ListGroup.Item>
                    {title && ( // if statement (IF title exists - since it is optional)
                        <ListGroup.Item>Title: { title }</ListGroup.Item>
                    )}
                </ListGroup>
            </>
        )
    }
}